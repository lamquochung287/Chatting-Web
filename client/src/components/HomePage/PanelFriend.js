import React from 'react'
import { Input, Col, Row } from 'antd'
import styled from 'styled-components'
import Person from '../Person'
const PanelFriendStyled = styled.div`
    margin: 1rem;
`

export const PanelFriend = () => {
    return (
        <PanelFriendStyled>
            <Row>
                <Col span={24}>
                    <Input.Search placeholder='Enter person by username' />
                </Col>
            </Row>


        </PanelFriendStyled>
    )
}
