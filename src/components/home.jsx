import React from "react";
import { Container, Conteudo } from "./home";
import Header from "./layout/header";
import Rotas from "./Rotas/homeRotas";
import {BrowserRouter as Router} from "react-router-dom"


export default function Home(){
    return(
        <Container>
            <h1>Pagina Principal</h1>
        </Container>
    )
}