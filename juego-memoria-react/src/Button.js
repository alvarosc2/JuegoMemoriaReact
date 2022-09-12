import './button-style.css'
import soundOn from './assets/sound--on.svg'
import soundOff from './assets/sound--off.svg'

export function Button() {
    return <div className="sound-button" onClick={()=>{
        const element = document.querySelector('.soundon')
        const style = getComputedStyle(element)
        console.log(style.visibility);

        document.getElementById("sound-on").style.visibility = "visible"
        document.getElementById("sound-off").style.visibility = "hidden"
    }}>
        <img className='soundoff' id="sound-on" src={soundOff} />
        <img className='soundon' id="sound-off" src={soundOn} />
        <audio>
            <source src="./assets/background.mp3" type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio>
    </div>
}