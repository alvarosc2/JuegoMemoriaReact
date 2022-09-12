import './style.css'
import moon from './assets/moon.svg'
import star from './assets/star.svg'
import sun from './assets/sun.svg'
import comet from './assets/comet.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

export function Card(props) {
    let numberOfClicks = 0
    let pairCards = []

    
    if (props.face=='moon') {
        return <label onClick={() => {
            if (numberOfClicks == 2) {
                if (pairCards[0] == pairCards[1]) {
                    alert('it is a match!!!')
                }
                else {
                    alert('good luck next time.')
                }
                numberOfClicks = 0
            }
            else if (numberOfClicks < 2) {
                pairCards[numberOfClicks] = props.face
                numberOfClicks++
            }
            
        }}>
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
        return <label onClick={() => {
            if (numberOfClicks == 2) {
                if (pairCards[0] == pairCards[1]) {
                    alert('it is a match!!!')
                }
                else {
                    alert('good luck next time.')
                }
                numberOfClicks = 0
            }
            else if (numberOfClicks < 2) {
                pairCards[numberOfClicks] = props.face
                numberOfClicks++
            }
            
        }}>
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
        return <label onClick={() => {
            if (numberOfClicks == 2) {
                if (pairCards[0] == pairCards[1]) {
                    alert('it is a match!!!')
                }
                else {
                    alert('good luck next time.')
                }
                numberOfClicks = 0
            }
            else if (numberOfClicks < 2) {
                pairCards[numberOfClicks] = props.face
                numberOfClicks++
            }
            
        }}>
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
        return <label onClick={() => {
            if (numberOfClicks == 2) {
                if (pairCards[0] == pairCards[1]) {
                    alert('it is a match!!!')
                }
                else {
                    alert('good luck next time.')
                }
                numberOfClicks = 0
            }
            else if (numberOfClicks < 2) {
                pairCards[numberOfClicks] = props.face
                numberOfClicks++
            }

            console.log(numberOfClicks)
            console.log(pairCards)
            
        }}>
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