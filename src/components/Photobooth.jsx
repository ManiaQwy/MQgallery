import { useCallback, useState } from "react"
import { createPortal } from "react-dom"
import { PHOTOS_ARRAY } from "../photoData"
import "./Photobooth.css"

export default function Photobooth(){
    const [index, currentIndex] = useState(1);
    const onButtonPress = useCallback((i) => {
        if(i < 0){
            i = (PHOTOS_ARRAY.length - 1);
        } else if(i >= PHOTOS_ARRAY.length){
            i = 0;}
            currentIndex(i)
        }, []);
    

    return(
        <div className="showcase">
            <button className="boothbutton" onClick={() => onButtonPress(index - 1)}>{"<"}</button>
            <img src={PHOTOS_ARRAY[index]} alt="bent yo circit" />
            <button className="boothbutton" onClick={() => onButtonPress(index + 1)}>{">"}</button>
        </div>
    )
}