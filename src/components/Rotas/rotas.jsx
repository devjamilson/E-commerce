import React,{useContext} from "react"
import { Routes, Route} from 'react-router-dom'

import Home from '../home.jsx'
import Admin from '../admin/admin'
import Cadastrar from '../user/cadastrar'
import Login from '../user/login'

import { UserContext } from "../../context/userContext.jsx"

export default function Rotas(){

    
    const [Logado, setLogado] = useContext(UserContext)
    return(
        <>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/carrinho" element = { <Login/> }   />
                <Route path="/favoritos" element = { <Login/> }   />
                <Route path="/produtos" element = { <Home/> }   />
                <Route path="/admin" element = {Logado.Logado ? <Admin/> : <Home/>}/>
            </Routes>
        </>
    )
}