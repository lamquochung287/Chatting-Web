import styled from 'styled-components'


export const AdvertisePageStyled = styled.div`
    margin: 2rem 15rem;
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    width: fit-content;
    box-sizing: border-box;

    section .title{
        background: linear-gradient(to right, #80786b, #789998);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
        font-size: 7rem;
        font-weight: 700;
        line-height: 1.2;
    }

    .quotes{
        margin-top: 4rem;
        font-size: 1.5rem;
        font-weight: 400;
    }
    footer{
        margin-top: 2rem;
        grid-column: 1 / -1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 3rem;
    }

    .btn-container{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .btn{
        background-image: linear-gradient(to right, #80786b, #789998);
        color: white;
        margin-top: 2rem;
        padding: 1rem;
        font-weight: 700;
        background-color: white;
    }

    .img-chat{
        margin: 2rem 2rem;
        filter: blur(0.1rem);
        border-radius: 2rem;
        width: 90%;
        height: 90%;
    }


`