import React, {  } from 'react';
import '../../styles.css';

const ErrorPage = (props) => {

    const url = "https://urly-link.web.app/"

    return(
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1>Opps nothing found 😞</h1>
            <a href={url}>
                <button style={{padding: '8px 24px', borderRadius: '5px', marginTop: '20px'}}>Lets go back</button>
            </a>
        </div>
    );
}


export default ErrorPage;