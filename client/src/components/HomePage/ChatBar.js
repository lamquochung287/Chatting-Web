import React from 'react'
import { Row, Col, Input, Form, List, Button } from "antd"
import Friend from '../Friend'
import styled from 'styled-components'
import { SendOutlined } from '@ant-design/icons'

const ColStyled = styled(Col)` 
    margin: auto;
`

const HeaderStyled = styled.div`
    height: 10vh;
    margin: 1rem 0 0 1rem;
`

const FooterStyled = styled.div`
    background: none;

`


const ContentStyled = styled.div`
    height: 75vh;
    display: flex;
    margin-left: 2rem;
    flex-direction: column;
    justify-content: flex-end;
`

const WrapperStyled = styled.div`
    height: 90vh;

`
const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    margin: 0 2rem 1rem 2rem;
`
export const ChatBar = () => {
    return (
        <WrapperStyled>


            <HeaderStyled>
                <Friend name="AAAAAAAAAA"></Friend>

            </HeaderStyled>

            <ContentStyled>
                <List></List>

                <FormStyled>
                    <Input></Input>
                    <Button style={{ border: 'none' }}><SendOutlined></SendOutlined></Button>
                </FormStyled>

            </ContentStyled>




        </WrapperStyled>
    )
}
