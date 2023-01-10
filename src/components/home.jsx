import React, {useState} from "react";
import { Container, MenuCategorias, ItemCat, Produtos, TodosOsProdutos} from "./home";
import {MdSmartphone, MdComputer, MdEventNote} from "react-icons/md"
import {GiDesk, GiDress} from "react-icons/gi"
import {BsSmartwatch, BsFillHandbagFill, BsListUl} from "react-icons/bs"
import {FaTshirt} from "react-icons/fa"
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

export default function Home(){
    const [dados, setDados] = useState([])
    
    api.get('/api/v1/produtos').then((response)=>{
       
        setDados(response.data)
    })

    return(
        <Container>
                <MenuCategorias>
                    <span><BsListUl></BsListUl>Categorias</span>
                    <button><ItemCat><MdSmartphone></MdSmartphone>Celular</ItemCat></button>
                    <button><ItemCat><MdComputer></MdComputer>Computador</ItemCat></button>
                    <button><ItemCat><MdEventNote></MdEventNote>Escritório</ItemCat></button>
                    <button><ItemCat><GiDesk></GiDesk>Móveis</ItemCat></button>
                    <button><ItemCat><GiDress></GiDress>Roupas Femininas</ItemCat></button>
                    <button><ItemCat><FaTshirt></FaTshirt>Roupas Masculinas</ItemCat></button>
                    <button><ItemCat><BsSmartwatch></BsSmartwatch>Acessários</ItemCat></button>
                    <button><ItemCat><BsFillHandbagFill></BsFillHandbagFill>Bolsas</ItemCat></button>
                </MenuCategorias>
                <TodosOsProdutos>
                
                        {dados.map(produto => 
                       <Produtos>
                            <img src={produto.src}/>
                            <h1>{produto.nome}</h1>
                            <span>{produto.preco}</span>
                        </Produtos>)}
                    
                </TodosOsProdutos>
             
            
        </Container>
    )
}