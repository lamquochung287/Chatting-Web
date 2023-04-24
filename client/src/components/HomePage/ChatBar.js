import React, { useEffect, useState } from 'react'
import { Input, Form, Button, Typography } from "antd"
import Friend from '../Friend'
import styled from 'styled-components'
import { SendOutlined } from '@ant-design/icons'
import Message from './Message'

const HeaderStyled = styled.div`
    height: 10vh;
    margin: 1rem 0 0 1rem;
`

const ListMessageStyled = styled.div`
    max-height: 100%;
    overflow-y: auto;
`
const TypographyStyled = styled(Typography.Text)`
    display: flex;
    justify-content: center;
    font-style: bold;
    color: gray;
    font-size: 2rem;
`

const ContentStyled = styled.div`
    height: 75vh;
    display: flex;
    margin-left: 2rem;
    margin-right: 4rem;
    flex-direction: column;
    justify-content: flex-end;
`

const WrapperStyled = styled.div`
    height: inherit;
`
const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    margin: 0 2rem 1rem 2rem;
`
export const ChatBar = ({ socket }) => {
    const chatWithFriend = localStorage.getItem("chatWith")
    const [listMessage, setListMessage] = useState()
    useEffect(() => {

    }, [chatWithFriend])
    return (
        <WrapperStyled>

            {chatWithFriend ?
                <>
                    <HeaderStyled>
                        <Friend name={chatWithFriend}></Friend>
                    </HeaderStyled><ContentStyled >
                        <ListMessageStyled>
                            <Message value={{ nameDisplay: "AAAAAAAAA", dateText: "12/02/2023", message: "Hello", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-R4c-jnJRMpKve4e7mVawuYbGOgzX5SPWUWwCznT&s", isOwnerMessage: true }}></Message>
                        </ListMessageStyled>
                        <FormStyled>
                            <Input></Input>
                            <Button style={{ border: 'none' }}><SendOutlined></SendOutlined></Button>
                        </FormStyled>

                    </ContentStyled>
                </>
                :
                <TypographyStyled> Choose Friend Online to chat with</TypographyStyled>
            }
        </WrapperStyled>
    )
}
