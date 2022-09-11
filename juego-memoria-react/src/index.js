import React from 'react'
import ReactDom from 'react-dom/client'
import {MoonCard} from './MoonCard.js'
import {StarCard} from './StarCard.js'
import {SunCard} from './SunCard.js'
import {CometCard} from './CometCard.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'



const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<div>
<Button/>

<div className="container">
  <div className="row">
    <div className="col">
        <MoonCard />
    </div>
    <div className="col">
        <StarCard />
    </div>
    <div className="col">
        <SunCard />
    </div>
    <div className="col">
        <CometCard />
    </div>
  </div>

  <div className="row">
    <div className="col">
        <MoonCard />
    </div>
    <div className="col">
        <StarCard />
    </div>
    <div className="col">
        <SunCard />
    </div>
    <div className="col">
        <CometCard />
    </div>
  </div>
</div>
 
</div>)