import React, {useState} from "react";
import axios from 'axios'


//style
import { Container, Produtos, TodosOsProdutos, ContImgProdutos, ContInfoProdutos} from "./home";

//icones
import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'



const api = axios.create({
    baseURL: 'http://localhost:8080'
})

export default function Home(){
    const [dados, setDados] = useState([])
    
    api.get('/produtos').then((response)=>{
        setDados(response.data)
    })

    return(
        <>
        <Header></Header>
        <Container>
                <TodosOsProdutos>
                        {dados.map(produto => 
                       <Produtos>
                            <ContImgProdutos>
                                <img src={produto.src}/>
                            </ContImgProdutos>
                            <ContInfoProdutos>
                                <h1>{produto.nome}</h1>
                                <div>
                                    <AiFillStar></AiFillStar>
                                    <AiFillStar></AiFillStar>
                                    <AiFillStar></AiFillStar>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                </div>
                                <h2>{produto.preco}</h2>
                            </ContInfoProdutos>
                        </Produtos>)}
                </TodosOsProdutos>
        </Container>
        <Footer></Footer>
        </>
    )
}