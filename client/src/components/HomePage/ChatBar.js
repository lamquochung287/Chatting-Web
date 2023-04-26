import React, { useEffect, useState } from 'react'
import { Input, Form, Button, Typography } from "antd"
import Friend from '../Friend'
import styled from 'styled-components'
import { SendOutlined } from '@ant-design/icons'
import Message from './Message'
import { useSelector } from 'react-redux'
import { useSubmit } from 'react-router-dom'

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
    const { objectName } = useSelector((state) => state.chatting)
    const [form] = Form.useForm()
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    const handleSubmit = (e) => {
        form.resetFields();
        socket.emit("send_message", message)
        console.log(message)
    }


    useEffect(() => {

    }, [objectName])
    return (
        <WrapperStyled>

            {objectName ?
                <>
                    <HeaderStyled>
                        <Friend name={objectName}></Friend>
                    </HeaderStyled><ContentStyled >
                        <ListMessageStyled>
                            <Message value={{ nameDisplay: "AAAAAAAAA", dateText: "12/02/2023", message: "Hello", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-R4c-jnJRMpKve4e7mVawuYbGOgzX5SPWUWwCznT&s", isOwnerMessage: true }}></Message>
                        </ListMessageStyled>
                        <FormStyled onFinish={handleSubmit} form={form}>
                            <Form.Item style={{ width: '100%' }} name="message">
                                <Input placeholder="Enter message to send" type="text" onChange={handleChange}></Input>
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" style={{ border: 'none' }}><SendOutlined></SendOutlined></Button>
                            </Form.Item>
                        </FormStyled>

                    </ContentStyled>
                </>
                :
                <TypographyStyled> Choose Friend Online to chat with</TypographyStyled>
            }
        </WrapperStyled>
    )
}
