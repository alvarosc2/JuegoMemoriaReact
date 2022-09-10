import './style.css'
import sun from './assets/sun.svg'

export function SunCard() {
    return <label>
    <input type="checkbox" />
    <div className="flip3D">
      <div className="back">
      <img src={sun} />
      </div>
      <div className="front">
        <h1>?</h1>
      </div>
    </div>
  </label>
  
}