import styled from "styled-components";

export const Container = styled.div`
   height: 170vh;
`
export const Conteudo = styled.div`
   

`
export const MenuCategorias = styled.ul`
  display: flex;
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
`

export const ItemCat = styled.li`
   list-style: none;
   text-align: left;
   font-size: 17px;
   padding-left: 15px;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

