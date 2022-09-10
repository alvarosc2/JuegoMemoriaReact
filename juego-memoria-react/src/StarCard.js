import './style.css'
import star from './assets/star.svg'

export function StarCard() {
    return <label>
    <input type="checkbox" />
    <div className="flip3D">
      <div className="back">
        <img src={star} />
      </div>
      <div className="front">
        <h1>?</h1>
      </div>
    </div>
  </label>
  
}