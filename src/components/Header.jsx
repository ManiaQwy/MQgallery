import mqLogo from '../assets/MQaystickerNONIGGRADIENT.webp'
import ratLogo from '../assets/ratwmascNOIGGRADIENT.png'
import './Header.css'

export default function Header(){
    return(
        <header>
            <img src={mqLogo} alt="logo" style={{maxWidth: "10em", minWidth: "10em"}}/>
            {//<img src={ratLogo} alt="rat" />
            }
        </header>
    )
}