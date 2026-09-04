import mqLogo from '../assets/misc/MQaystickerNONIGGRADIENTmusic.webp'
import ratLogo from '../assets/misc/ratwmascNOIGGRADIENT.png'
import callcardLogo from '../assets/misc/MQlogo.png'
import './Header.css'

export default function Header(){
    return(
        <header>
            <img src={callcardLogo} alt="logo" style={{maxWidth: "10em", minWidth: "10em"}}/>
            {//<img src={ratLogo} alt="rat" />
            }
        </header>
    )
}