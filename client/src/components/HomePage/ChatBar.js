import React, { useEffect, useMemo, useState } from 'react'
import { Input, Form, Button, Typography } from "antd"
import Friend from '../Friend'
import styled from 'styled-components'
import { SendOutlined } from '@ant-design/icons'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from '../../features/chatObject/objectSlice'
import axios from 'axios'
import moment from "moment"
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
    gap: 1em;
    margin: 0 2rem 1rem 2rem;
`
export const ChatBar = ({ socket }) => {
    const { objectName } = useSelector((state) => state.chatting)
    const [form] = Form.useForm()
    const [message, setMessage] = useState("")
    const [listMessages, setListMessages] = useState([])
    const [newMessage, setNewMessage] = useState(false)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    const handleSubmit = (e) => {
        form.resetFields();
        socket.emit("message", { friendName: objectName, message: message })
        dispatch(sendMessage({ objectName: objectName, message: message }))
        setNewMessage(true)
    }
    // const getMessage = useMemo(async () => {
    //     console.log("Re render getmessage")
    //     try {
    //         const resp = await axios.post(`/api/chats/getMessage/${objectName}`)
    //         const listMessage = resp.data.listMessage
    //         if (listMessage.length > 0) {
    //             listMessage.map(object => {
    //                 console.log(object)
    //             })
    //             setListMessages(listMessage)
    //         }
    //         return;
    //     } catch (error) {
    //         console.log(error)
    //         return error
    //     }
    // }, [listMessages])

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const resp = await axios.post(`https://chatting-web-iiv3.onrender.com/api/chats/getMessage/${objectName}`)
                const listMessage = resp.data.listMessage
                if (listMessage.length > 0) {
                    // listMessage.map(object => {
                    //     console.log(object)
                    // })
                    setListMessages(listMessage)
                }
                else {
                    setListMessages([])
                }
                return;
            } catch (error) {
                console.log(error.response)
                return error
            }
        }
        if (objectName !== null) {
            socket.emit("getListMessage", listMessages)
            fetchMessage()
        }

        if (objectName !== null && newMessage) {
            socket.on("message", (messages) => {
                setListMessages(messages)
                setNewMessage(false)
            })
        }
    }, [objectName, listMessages])

    return (
        <WrapperStyled>

            {objectName ?
                <>
                    <HeaderStyled>
                        <Friend name={objectName}></Friend>
                    </HeaderStyled><ContentStyled >
                        <ListMessageStyled>
                            {listMessages ?
                                listMessages.map((object, index) =>
                                    <Message key={index} value={{
                                        nameDisplay: object.message.name,
                                        dateText: moment(object.message.date).format("HH:MM:SS DD-MM-YYYY "),
                                        message: object.message.content,
                                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-R4c-jnJRMpKve4e7mVawuYbGOgzX5SPWUWwCznT&s",
                                        isOwnerMessage: object.message.isOwner
                                    }} />
                                )
                                : <></>
                            }
                            {/* <Message value={{ nameDisplay: "AAAAAAAAA", dateText: "12/02/2023", message: "Hello", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-R4c-jnJRMpKve4e7mVawuYbGOgzX5SPWUWwCznT&s", isOwnerMessage: true }}></Message> */}
                        </ListMessageStyled>
                        <FormStyled onFinish={handleSubmit} form={form}>
                            <Form.Item style={{ width: '100%' }} name="message">
                                <Input placeholder="Enter message to send" type="text" onChange={handleChange}></Input>
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" style={{ border: 'none' }}><SendOutlined style={{ color: 'LightSeaGreen' }}></SendOutlined></Button>
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
