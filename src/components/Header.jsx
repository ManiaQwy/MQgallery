import mqLogo from '../assets/misc/MQaystickerNONIGGRADIENTmusic.webp'
import ratLogo from '../assets/misc/ratwmascNOIGGRADIENT.png'
import callcardLogo from '../assets/misc/MQlogo.png'
import './Header.css'

export default function Header(prop){
    return(
        <header>
            {prop.children}
            <img src={callcardLogo} alt="logo" style={{maxWidth: "25em", minWidth: "25em"}}/>
            {//<img src={ratLogo} alt="rat" />
            }
        </header>
    )
}