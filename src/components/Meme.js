import memeData from "../assets/memeData";

export default function Meme () {

    function getMemeImage() {
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const { url } = memesArray[randomNumber];
        console.log(url);
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input" />
                <input type="text" placeholder="Bottom text" className="form--input" />
                <button className="form--button" onClick={getMemeImage}>Get new image</button>
            </div>
        </main>
    )
}