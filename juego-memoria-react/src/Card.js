import './style.css'
import moon from './assets/moon.svg'
import star from './assets/star.svg'
import sun from './assets/sun.svg'
import comet from './assets/comet.svg'

export function Card(props) {
    if (props.face=='moon') {
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
       else if (props.face=='star') {
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
       else if (props.face=='sun') {
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
       else if (props.face=='comet') {
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
    
    
  
}