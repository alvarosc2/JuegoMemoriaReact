import React from 'react'
import ReactDom from 'react-dom/client'
import {MoonCard} from './MoonCard.js'
import {StarCard} from './StarCard.js'
import {SunCard} from './SunCard.js'
import {CometCard} from './CometCard.js'
import {Card} from './Card.js'
import {ShuffleCards} from  './ShuffleCards'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

const root = ReactDom.createRoot(document.getElementById('root'))
const shuffledDeck = ShuffleCards()
root.render(<div>

<Button/>

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
        <Card face={shuffledDeck[5]}/>
    </div>
    <div className="col">
        <Card face={shuffledDeck[6]}/>
    </div>
    <div className="col">
        <Card face={shuffledDeck[7]}/>
    </div>
  </div>
</div>
 
</div>)