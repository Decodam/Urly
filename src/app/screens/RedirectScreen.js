import React, { useState, useEffect, useRef } from 'react';
import '../../styles.css';
import db from '../config/firebase';
import { useParams } from "react-router-dom";


const RedirectScreen = (props) => {

    const url = "https://urly-link.web.app/";

    const [Count, setCount] = useState(5);

    //Custom Hook
    function useInterval(callback, delay) {
        const savedCallback = useRef();
      
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
    }

    useInterval(() => {
        if (Count > 0) {
            setCount(Count - 1);
        } else {
            setCount(0);
            db.collection("links").doc(docId).onSnapshot((doc) => {
                if (doc.data()) {
                    window.location.replace(doc.data().link);
                } else {
                    window.location.replace(url);
                    alert("Invalid link!");
                }
            })
        }
    }, 1000);


    let { docId } = useParams();


    return(
        <>
        <header>
                <nav>
                    <a href={url} className="logo">🌟Urly.</a>
                </nav>
            </header>
            
            <main>
                <div className="content">
                    <h2>Please Wait,</h2>
                    <h1>Redirecting in <span>{Count} secs</span></h1>
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


export default RedirectScreen;