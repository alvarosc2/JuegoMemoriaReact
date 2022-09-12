import './style.css'
import moon from './assets/moon.svg'
import star from './assets/star.svg'
import sun from './assets/sun.svg'
import comet from './assets/comet.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react'

class Card extends Component {
    render() {
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
}
