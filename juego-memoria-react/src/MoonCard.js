import './style.css'
import moon from './assets/moon.svg'

export function MoonCard() {
    return <label>
    <input type="checkbox" />
    <div className="flip3D">
      <div className="back">
      <img src={moon} />
      </div>
      <div className="front">
        <h1>?</h1>
      </div>
    </div>
  </label>
  
}