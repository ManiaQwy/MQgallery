import { useState } from "react"
import SOUNDTRACK from '../assets/iembracethedyingworld.mp3'
import './SoundButton.css'

const audio = new Audio(SOUNDTRACK);
audio.loop = true;

export default function SoundButton({children}) {
    const [isPlaying, setIsPlaying] = useState(false);

    function playpause() {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    }

    return (
        <div className="bg">
        <button className="track" onClick={playpause}>
            {//isPlaying ? "Pause" : "Play"
            }
            {children}
        </button>
        </div>
    )
}