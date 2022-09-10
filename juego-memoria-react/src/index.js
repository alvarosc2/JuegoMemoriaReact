import React from 'react'
import ReactDom from 'react-dom/client'
import { Greeting, UserCard } from './Greeting'
import Product, {NavBar} from './Product'

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<>
    <Greeting />
    <UserCard />
    <Product />
    <NavBar />
</>)