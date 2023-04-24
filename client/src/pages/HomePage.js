import React, { useEffect } from 'react'
import { Row, Col } from 'antd'
import { ChatBar } from '../components/HomePage/ChatBar'
import { HomePageStyled } from '../components/HomePage/style'
import { SlideBar } from '../components/HomePage/SlideBar'
import io from 'socket.io-client'

const socket = io("http://localhost:5000")

export const HomePage = () => {

    useEffect(() => {
        document.title = "Home Page"
    }, [])
    return (
        <HomePageStyled>
            <Row>
                <Col span={5}><SlideBar socket={socket} /></Col>
                <Col span={19}><ChatBar socket={socket} /></Col>

            </Row>
        </HomePageStyled>
    )
}


export default HomePage

