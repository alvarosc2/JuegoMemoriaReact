import React from 'react'
import ReactDom from 'react-dom/client'
import {MoonCard} from './MoonCard.js'
import {StarCard} from './StarCard.js'
import {SunCard} from './SunCard.js'
import {CometCard} from './CometCard.js'



const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<div>
 <MoonCard />
    <StarCard />
    <SunCard />
    <CometCard />
 
</div>)