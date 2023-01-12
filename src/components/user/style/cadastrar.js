import styled from 'styled-components'

export const Container = styled.div`
   height: 84.5vh;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

export const ContCadastrar = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   box-shadow: 0px 1px 15px -3px  #A9A9A9;
   width: 25%;
   height: 55vh;
   border-radius: 20px;
   padding: 2%;

   h1{
      margin-top: 0;
      font-size: 32px;
      color: 	#191970;
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }

   input{
      height: 6vh;
      margin-top: 1.5vh;
      border-radius: 20px;
      width: 95%;
      border: none;
      background-color: 	#F2F2F2;
      padding-left: 15px;
      outline: none;
   }
   button{
      height: 6vh;
      margin-top: 4vh;
      background-color: #FF4500;
      border: none;
      color: #fff;
      width: 100%;
      border-radius: 20px;
      cursor: pointer;
   }

`