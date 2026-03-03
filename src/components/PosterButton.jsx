import './PosterButton.css'

export default function PosterButton(prop){
    return(
        <button className={prop.isSelected ? "active" : undefined}
        onClick={
            prop.onSelect
        }>{prop.children}   
            <img src={prop.buttonImage} alt="posterx" />
        </button>
    )
}