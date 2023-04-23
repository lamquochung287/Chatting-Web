import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import styled from 'styled-components'
import Person from '../Person'
import { useSelector } from 'react-redux'

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
    const [updateListFriend, setUpdateFriend] = useState(false)


    useEffect(() => {
        socket.on("data", (data) => {
            let list = data
            console.log(data)
            const listData = list.filter(i => i !== user.username)
            console.log(listData)
            setUpdateFriend(true)
            setListFriend(listData)
        })
        return () => {
            setUpdateFriend(false)
        }
    }, [updateListFriend])
    return (
        <PanelFriendStyled>

            <WrapperSearch>

                <Input.Search placeholder='Enter person by username' />
            </WrapperSearch>

            <WrapperListStyled>

                <PersonListStyled>
                    {
                        listFriend?.map((friend, index) =>

                            <Person key={index} name={friend} ></Person>
                        )}
                </PersonListStyled>
            </WrapperListStyled>

        </PanelFriendStyled >

    )
}
