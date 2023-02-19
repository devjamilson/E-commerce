import styled from "styled-components";

export const Container = styled.div`

  section{
    background-color: #f2f2f2;
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const CadastrarP = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 15px;
    width: 45%;
    background-color: #fff;
    height: 60vh;
    text-align: center;
    h1{
        font-size: 32px;
        color: #F23005;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        input, select{
            padding-left: 10px;
            background-color: #fcfcfc;
            border: 1px solid rgba(0,0,0,0.25);
            margin-top: 2vh;
            height: 5vh;
            width: 90%;
            border-radius: 10px;
            outline: none;
        }

        select{
            width: 92.5%; 
            height: 5.5vh;
        }

        button{
            margin-top: 3vh;
            border: none;
            background-color: #191970;
            color: #fff;
            height: 6vh;
            width: 15%;
            border-radius: 10px;
            cursor: pointer;
        }
    }
`
