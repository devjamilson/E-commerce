import React from "react"
import { Routes, Route} from 'react-router-dom'

import Home from '../home.jsx'

import Cadastrar from '../user/cadastrar'
import Login from '../user/login'

export default function Rotas(){
    return(
        <>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/Carrinho" element = { <Login/> }   />
                <Route path="/Favoritos" element = { <Login/> }   />
                
                <Route path="/Produtos" element = { <Home/> }   />
            </Routes>
        </>
    )
}