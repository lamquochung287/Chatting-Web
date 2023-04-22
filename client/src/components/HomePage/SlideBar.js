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

const HeaderStyled = styled.div`
    height: 7vh;
`

const ContentStyled = styled.div`
    height: 85vh;
    margin: 1rem;
`

export const SlideBar = ({ socket }) => {
    return (
        <SlideBarStyled>
            <HeaderStyled>
                <User socket={socket}></User>
            </HeaderStyled>
            <ContentStyled>
                <PanelFriend socket={socket} />
            </ContentStyled>
        </SlideBarStyled>
    )
}
