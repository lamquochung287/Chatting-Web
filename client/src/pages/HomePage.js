import React, { useEffect } from 'react'
import { Row, Col } from 'antd'
import { ChatBar } from '../components/HomePage/ChatBar'
import { HomePageStyled } from '../components/HomePage/style'
import { SlideBar } from '../components/HomePage/SlideBar'

export const HomePage = () => {
    useEffect(() => {
        document.title = "Home Page"
    }, [])
    return (
        <HomePageStyled>
            <Row>
                <Col span={5}><SlideBar /></Col>
                <Col span={19}><ChatBar /></Col>

            </Row>
        </HomePageStyled>
    )
}


export default HomePage

