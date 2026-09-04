import { useState, useRef, useEffect } from "react";
import SOUNDTRACK from "../assets/misc/iembracethedyingworld.mp3";
import SOUNDON from "../assets/misc/soundon.gif";
import SOUNDOFF from "../assets/misc/soundoff.png";
import "./SoundButton.css";

export default function SoundButton() {
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(null);

    if (!audioRef.current) {
        audioRef.current = new Audio(SOUNDTRACK);
        audioRef.current.loop = true;
    }

    function playpause() {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(error => console.error("Audio failed:", error));
        }
    }

    useEffect(() => {
        return () => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        };
    }, []);

    return (
        <div className="bg">
            <button className="track" onClick={playpause}>
                <img id="smack"
                    src={isPlaying ? SOUNDON : SOUNDOFF}
                    alt={isPlaying ? "Sound on" : "Sound off"}
                />
            </button>
        </div>
    );
}