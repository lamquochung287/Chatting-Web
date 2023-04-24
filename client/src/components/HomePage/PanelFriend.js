import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import styled from 'styled-components'
import Person from '../Person'
import { useSelector } from 'react-redux'
import { setObjectName } from '../../features/chatObject/objectSlice'

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
    const { user } = useSelector((state) => state.login)
    const [listFriend, setListFriend] = useState()

    const selectFriend = (friend) => {
        socket.on("chat_with", friend)
        localStorage.setItem("chatWith", friend)
        console.log(friend)
    }

    useEffect(() => {
        socket.on("friends", (data) => {
            let list = data
            const listData = list.filter(i => i !== user.username)
            setListFriend(listData)
        })
    })

    return (
        <PanelFriendStyled>

            <WrapperSearch>

                <Input.Search placeholder='Enter person by username' />
            </WrapperSearch>

            <WrapperListStyled>

                <PersonListStyled>
                    {
                        listFriend?.map((friend, index) =>
                            <Person key={index} name={friend} onClick={(friend) => selectFriend(friend)} />
                        )}
                </PersonListStyled>
            </WrapperListStyled>

        </PanelFriendStyled >

    )
}
