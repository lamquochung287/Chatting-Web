import { Avatar, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'


const WrapperStyled = styled.div`;
    margin: 0.5rem 4rem 0.5rem 1rem;
    display: flex;
    justify-content: flex-start;
    .author{
        margin-left: 1rem;
        margin-right: 0.5rem;
        font-weight: bold;
        height: 1rem;
    }
    .date{
        margin-left: 1rem;
        font-weight: italic;
        color: gray; 
        font-size: 0.75rem;
    }
    .message{
        margin-left: 1rem;
        margin-right: 1rem;
    
    } 


`
const ContainerStyled = styled.div`
    display: flex;
    margin: 0 0.5rem 0 0.5rem;
    flex-direction: column;
    border: 1px ridge gray;
    border-radius: 5rem;
    padding: 0 0.5rem 0 0.5rem;
    min-width: min-content;
`


export default function Message(props) {
    const { nameDisplay, message, avatar, dateText, isOwnerMessage } = props.value
    let rowOrRowReverse = "row";
    if (isOwnerMessage) {
        rowOrRowReverse = "row-reverse";
    }
    return (
        <WrapperStyled style={{ flexDirection: rowOrRowReverse }}>

            <Avatar className="avatar" size={50} src={avatar}></Avatar>
            <ContainerStyled>
                <Typography.Text className='author'>
                    {nameDisplay}
                </Typography.Text>
                <Typography.Text className='date'> Send at: {dateText}</Typography.Text>
                <Typography.Text className='message'>{message}</Typography.Text>
            </ContainerStyled>
        </WrapperStyled >
    )
}
