import { useState, useEffect } from "react";

function Meme () {

    const [meme, setMeme] = useState(
        () => JSON.parse(localStorage.getItem("meme")) || {
        topText: "",
        bottomText: "",
        customUrl: "",
        randomImage: "https://i.imgflip.com/9ehk.jpg"
    });

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        localStorage.setItem("meme", JSON.stringify(meme))
    }, [meme])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
            customUrl: ""
        }));
    };

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input" name="topText" value={meme.topText} onChange={handleChange} />
                <input type="text" placeholder="Bottom text" className="form--input" name="bottomText" value={meme.bottomText} onChange={handleChange} />
                <input type="text" placeholder="Custom Image URL" className="form--input" name="customUrl" value={meme.customUrl} onChange={handleChange} />
                <button className="form--button" onClick={getMemeImage}>random image &nbsp;&nbsp;&#128444;&#65039;</button>
            </div>
            <div className="meme">
                    <img src={meme.customUrl ? meme.customUrl : meme.randomImage} className="meme--image" alt="meme" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
        </main>
    );
};

export default Meme;