import React from 'react'
import { Col, Row } from 'antd'
import styled from 'styled-components'
import User from '../HomePage/User'
import { PanelFriend } from './PanelFriend'

const SlideBarStyled = styled.div`
    height: 90vh;
    border-right: 1px solid black;
    box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.3);
`

export const SlideBar = () => {
    return (
        <SlideBarStyled>
            <Row>
                <Col span={24}><User /></Col>
                <Col span={24}><PanelFriend></PanelFriend></Col>
            </Row>
        </SlideBarStyled>
    )
}
