import React from 'react';


export default function Header() {
    return (
        <div>
            <header className='header'>
                <img src="./img/meme-face.png" className="header--image" alt="header" />
                <h2 className='header--name'>Meme Boi</h2>
                <h4 className='header--title'>Meme Generator</h4>
            </header>
           
        </div>
    )
}