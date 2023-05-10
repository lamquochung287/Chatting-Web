import styled from 'styled-components'


export const AdvertisePageStyled = styled.div`
    margin: 0 15rem;
    display: grid;
    grid-template-columns: 1fr 2fr;

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
        grid-column: 2/1;
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
        margin: 2rem;
        filter: blur(0.1rem);
        border-radius: 2rem;
        width: 100%;
        height: 90%;
    }
`