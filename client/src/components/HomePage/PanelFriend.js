import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd'
import styled from 'styled-components'
import Person from '../Person'
import { useDispatch, useSelector } from 'react-redux'
import { setObjectName } from '../../features/chatObject/objectSlice'

const PanelFriendStyled = styled.div`
    height: inherit;
`
const PersonListStyled = styled.div`
    height: 75vh;
    width: 17vw;
    max-height: 100%;
    overflow-y: auto;
`


const WrapperListStyled = styled.div`
    height: 75vh;
    display:flex;
    flex-direction: column;
`
const ButtonStyled = styled(Button)`
    background: none;
    border: none;
    height: 10vh;
    width: inherit;

`
export const PanelFriend = ({ socket }) => {
    const { user } = useSelector((state) => state.login)
    const { findFriendByName } = useSelector((state) => state.chatting)

    const [listFriend, setListFriend] = useState([])
    const dispatch = useDispatch()
    const selectFriend = (id, friend) => {
        socket.emit("chat_with", friend)
        dispatch(setObjectName(friend))
    }

    useEffect(() => {
        socket.on("friends", (data) => {
            let list = data
            const listData = list.filter(i => i.username !== user.username)
            setListFriend(listData)
        })

    })

    useEffect(() => {
        const result = listFriend.filter(object => object.username === findFriendByName)
        setListFriend(result)
        console.log(result)
    }, [findFriendByName])

    return (
        <PanelFriendStyled>

            <WrapperListStyled>

                <PersonListStyled>
                    {
                        listFriend?.map((friend) =>
                            <ButtonStyled key={friend.serverId} onClick={() => { selectFriend(friend.serverId, friend.username) }}>
                                <Person key={friend.serverId} name={friend.username} />
                            </ButtonStyled>
                        )
                    }
                </PersonListStyled>
            </WrapperListStyled>

        </PanelFriendStyled >

    )
}
