import React from 'react'
import { Row, Col } from "antd"
import Friend from '../Friend'

export const ChatBar = (props) => {
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Friend props={"AAAAAAAAAA"}></Friend>
                </Col>
            </Row>


        </div>
    )
}
