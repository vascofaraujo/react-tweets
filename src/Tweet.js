import React from 'react';
import './App.css';

function Tweet({message, likes}){
    
    return(
        <div className="tweet">
            <p>{message}</p>
            <h3>{likes}</h3>
        </div>
    );
}

export default Tweet