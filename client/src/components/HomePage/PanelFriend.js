import React from 'react'
import { Input, Col, Row } from 'antd'
import styled from 'styled-components'
import Person from '../Person'

const PanelFriendStyled = styled.div`
    height: inherit;
`
const PersonListStyled = styled.div`
    max-height: 100%;
    overflow-y: auto;
`

const WrapperSearch = styled.div`
    height: 5vh;
`

const WrapperListStyled = styled.div`
    height: 75vh;
    display:flex;
    flex-direction: column;
`
export const PanelFriend = () => {
    return (
        <PanelFriendStyled>

            <WrapperSearch>

                <Input.Search placeholder='Enter person by username' />
            </WrapperSearch>

            <WrapperListStyled>

                <PersonListStyled>
                    <Person />
                    <Person />

                    <Person />
                    <Person />
                    <Person />

                    <Person />

                    <Person />
                    <Person />
                    <Person />
                    <Person />

                </PersonListStyled>
            </WrapperListStyled>

        </PanelFriendStyled>

    )
}
