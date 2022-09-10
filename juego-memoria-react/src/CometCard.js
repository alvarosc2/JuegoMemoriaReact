import './style.css'
import comet from './assets/comet.svg'

export function CometCard() {
    return <label>
    <input type="checkbox" />
    <div className="flip3D">
      <div className="back">
      <img src={comet} />
      </div>
      <div className="front">
        <h1>?</h1>
      </div>
    </div>
  </label>
  
}