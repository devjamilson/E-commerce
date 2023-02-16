import styled from "styled-components";

export const Container = styled.div`
   height: 400vh;
   display: flex;
   align-items: row;
   width: 100%;
`
export const Conteudo = styled.div`
   

`
export const MenuCategorias = styled.ul`
  display: flex;
  height: 61.5vh;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 20px;
  justify-content: center;
  width: 19%;
  background-color: #FBFBFB;
  padding:0;  
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  span{
    height: 5.5vh;
    background-color: #E7E7E7;
    color: #5b5b5b;
    border-radius: 15px 15px 0px 0px;
    font-size: 17px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    *{
      color: #5b5b5b;
      margin-right: 15px;
    }
  }
  button{
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    border: none;
    height: 7vh;
    *{
      color: #5b5b5b;
      margin-right: 15px;
    }
  }
  a{
    text-decoration: none;
  }
`

export const ItemCat = styled.li`
   list-style: none;
   text-align: left;
   font-size: 17px;
   padding-left: 15px;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

export const TodosOsProdutos = styled.section`
    margin-left: 20px;
    margin-top: 20px;
    display:grid;
    grid-template-columns: 38% 38% 38% ;
    grid-template-rows: 15% 15% 15% 15%;
    gap: 4vh;
`

export const Produtos = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
    width: 100%;
    background-color: #FBFBFB;
    padding:0;  
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    img{
       height: 40vh;
       width: 85%;
       border-radius: 20px;
    }

`

export const ContImgProdutos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2vh;
    height: 42vh;
`

export const ContInfoProdutos = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2vh;
    padding-left: 25px;
    height: 18vh;
    *{
      margin: 0;
    }

    h1{
       font-size: 18px;
       font-family: Arial, Helvetica, sans-serif;
    }

    h2{
      font-size: 24px;
    }

    div{
      *{
        color: #ebcc34;
        font-size: 20px;
      }
    }
`
