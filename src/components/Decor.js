import '../css/Decor.css';
import React from 'react';
export const Decor=()=>{
    return(
        <div className='decor'>
            <div className="nav">
                <a>User</a>
                <a>About</a>
                <a>Log Out</a>
            </div>
            <input type="checkbox" id="check"/>
                <label htmlFor="check">
                    <img id='open' className="img" src={require('../img/tab.png')} alt="alt"/>
                        <img id='close' className="img" src={require('../img/cancel.png')} alt="alt"/>
                </label>
            <div className="sidebar">
                <header>Menu</header>
                <a>Me</a>
                <a>Details</a>
                <a>About</a>
                <a>Help</a>
            </div>
            <div id="background"/>
        </div>
    )
}