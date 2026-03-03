import { useState } from "react"
import SOUNDTRACK from '../assets/djrozwellnonisreal.mp3'
import './SoundButton.css'

const audio = new Audio(SOUNDTRACK);

export default function SoundButton() {
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
        <button onClick={playpause}>
            {isPlaying ? "Pause" : "Play"}
        </button>
    )
}