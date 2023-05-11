import React, { useState } from 'react'
import { Input, Form } from 'antd'
import styled from 'styled-components'
import User from '../HomePage/User'
import { PanelFriend } from './PanelFriend'
import { findFriendName } from '../../features/chatObject/objectSlice'
import { useDispatch } from 'react-redux'

const SlideBarStyled = styled.div`
    height: 90vh;
    width: 19vw;
    border-right: 1px solid black;
    box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.3);
`

const HeaderStyled = styled.div`
    height: 7vh;
`

const ContentStyled = styled.div`
    height: 85vh;
    margin: 1rem;
`

const WrapperSearch = styled.div`
    height: 5vh;
    margin-bottom: 1rem;
`

const PannelFriendStyled = styled.div`
    width: 17vw;

`
export const SlideBar = ({ socket }) => {
    const [form] = Form.useForm()
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        form.resetFields();
        dispatch(findFriendName(input))
    }

    const handleChange = (e) => {
        const name = e.target.value
        setInput(name)
    }
    return (
        <SlideBarStyled>
            <HeaderStyled>
                <User socket={socket}></User>
            </HeaderStyled>
            <ContentStyled>
                <WrapperSearch>
                    <Form onFinish={handleSubmit} form={form}>
                        <Form.Item name="search">
                            <Input.Search placeholder='Enter person by username' onChange={handleChange} onSearch={handleSubmit} />
                        </Form.Item>
                    </Form>
                </WrapperSearch>
                <PannelFriendStyled>
                    <PanelFriend socket={socket} />
                </PannelFriendStyled>
            </ContentStyled>
        </SlideBarStyled>
    )
}
