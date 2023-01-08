import { Conteudo } from "./components/home";
import Header from "./components/layout/header";

//Roteamento
import Rotas from "./components/Rotas/homeRotas";
import {BrowserRouter as Router} from "react-router-dom"

export default function App() {
  return (
    <div className="App">
       <Router>
          <Header></Header>
          <Conteudo>
              <Rotas></Rotas>
          </Conteudo>
        </Router>
    </div>
  );
}

