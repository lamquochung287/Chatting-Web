import React, { useEffect } from 'react'
import { Input } from 'antd'
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
export const PanelFriend = ({ socket }) => {
    const ListFriend = socket
    useEffect(() => {
        console.log(ListFriend)
    }, [ListFriend])
    return (
        <PanelFriendStyled>

            <WrapperSearch>

                <Input.Search placeholder='Enter person by username' />
            </WrapperSearch>

            <WrapperListStyled>

                <PersonListStyled>
                    <Person />
                </PersonListStyled>
            </WrapperListStyled>

        </PanelFriendStyled>

    )
}
