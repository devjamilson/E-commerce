import React from "react"
import { Routes, Route} from 'react-router-dom'

import Home from '../home.jsx'
import Login from '../user/login'

export default function Rotas(){
    return(
        <>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/Login" element = { <Login/> } />
                <Route path="/Carrinho" element = { <Login/> }   />
                <Route path="/Favoritos" element = { <Login/> }   />
            </Routes>
        </>
    )
}