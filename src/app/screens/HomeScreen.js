import React, { useState } from 'react';
import '../../styles.css';
import db from '../config/firebase';

const HomeScreen = (props) => {
    const [DisplayOutput, setDisplayOutput] = useState(false);
    const [Input, setInput] = useState('');
    const [Output, setOutput] = useState('');

    const url = "https://urly-link.web.app/"

    const handleSubmit = async() => {
        if (Input === "" || !Input) {
            alert("Please type your link!!!");
        } else {
            await db.collection("links").add({
                link: Input
            }).then((doc) => {
                setOutput(`${url}redirect/${doc.id}/`);
                navigator.clipboard.writeText(`${url}redirect/${doc.id}/`);
                alert("New link created and copied to your clipboard!");
                setDisplayOutput(true);
            })
        }
    };

    const handleCopy = async() => {
        navigator.clipboard.writeText(Output);
        alert("The link is copied to your clipboard!!!");
    };

    const handleReset = async() => {
        setDisplayOutput(false);
        setInput('');
        setOutput('');
    };

    return(
        <>
            <header>
                <nav>
                    <a href={url} className="logo">🌟Urly.</a>
                </nav>
            </header>
            
            <main>
                <div className="content">
                    <div className="content_pri">Tired of using those <span>long links❓❓</span></div>
                    <div className="content_sec"><span>Shorten</span> it up with <span>Urly</span>🔥🔥</div>
                    <div className="content_des">
                        Struggling with those pesky long links?
                        Worry not, use Urly to create short links that can
                        be easily shared across all the platforms!!! 🚀
                    </div>

                    {DisplayOutput ? (
                        //OUTPUT
                        <div onClick={handleCopy} className="input_area">
                            <input value={Output} disabled={true} placeholder="Copy your link..." type="text" />
                            <button onClick={handleReset}>New link</button>
                        </div>
                    ) : (
                        //INPUT
                        <div className="input_area">
                            <input value={Input} onChange={(e) => {setInput(e.target.value)}} placeholder="Enter a link..." type="text" />
                            <button onClick={handleSubmit}>Create Link</button>
                        </div>
                    )}
                </div>

                
            </main>
            <footer>
                <nav style={{justifyContent: 'center'}}>
                    <div className="footer_creds">Copyright@2023 | All rights reserved |  Created by <a style={{color: '#10ff7c'}} href="#">@Arghya-Mondal</a></div>
                </nav>
            </footer>
        </>
    );
}


export default HomeScreen;