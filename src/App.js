import React, {useState} from "react";
import { Conteudo} from "./components/home";

//Roteamento
import Rotas from "./components/Rotas/rotas";
import {BrowserRouter as Router} from "react-router-dom"

import UserProvider, { UserContext } from './context/userContext'
export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Conteudo>
              <Rotas></Rotas>
          </Conteudo>
        </Router>
      </UserProvider>
       
    </div>
  );
}

