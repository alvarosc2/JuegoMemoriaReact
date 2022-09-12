import React from 'react'
import ReactDom from 'react-dom/client'
import {Card} from './Card.js'
import {ShuffleCards} from  './ShuffleCards'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from './Button'
import './container-style.css'

const root = ReactDom.createRoot(document.getElementById('root'))
const shuffledDeck = ShuffleCards()
var numberOfClicks = 0
var pairCards = []

root.render(<div>

<Button />

<div className="container">
  <div className="row">
    <div className="col">
        <Card face={shuffledDeck[0]} />
    </div>
    <div className="col">
        <Card face={shuffledDeck[1]} />
    </div>
    <div className="col">
        <Card face={shuffledDeck[2]} />
    </div>
    <div className="col">
        <Card face={shuffledDeck[3]} />
    </div>
  </div>

  <div className="row">
    <div className="col">
        <Card face={shuffledDeck[4]} />
    </div>
    <div className="col">
        <Card face={shuffledDeck[5]} />
    </div>
    <div className="col">
        <Card face={shuffledDeck[6]} onClick={() => {
            if (numberOfClicks == 2) {
                if (pairCards[0] === pairCards[1]) {
                    alert('it is a match!!!')
                }
                else {
                    alert('good luck next time.')
                }
            }
            else if (numberOfClicks < 2) {
                pairCards[numberOfClicks] = shuffledDeck[0]
                numberOfClicks++
            }
            
        }}/>
    </div>
    <div className="col">
        <Card face={shuffledDeck[7]} />
    </div>
  </div>
</div>
 
</div>)