import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Avatar, Button, Typography } from 'antd'
import styled from 'styled-components'
import { logout } from '../../features/login/loginSlice'
import { toast } from 'react-toastify';


const ContainerStyled = styled.div`
    display:flex;
    justify-content: space-between;
    width: inherit;
    padding: 1rem;
    box-shadow: 0px 0px 2px 0px rgba(16, 1, 4, 0.3);

`

const ButtonStyled = styled(Button)`
    background: rgba(0,0,0,0.1);
`

const AvatarStyled = styled(Avatar)`
    margin-right: 1rem;
`

export const User = ({ socket }) => {
    const { user } = useSelector((state) => state.login)
    const dispatch = useDispatch()
    const handleLogout = () => {
        toast.success(`${user.username} log out success`)
        dispatch(logout())
    }

    useEffect(() => {
        socket.emit("setup", user)
        socket.on("connection")
    }, [])
    return (
        <ContainerStyled>

            <div>
                <AvatarStyled src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKoeGTG2evu2zrPJadEAHCnm7BK5AJynLIw8BpQzZ&s" />
                <Typography.Text>{user.username}</Typography.Text>
            </div>
            <div>
                <ButtonStyled onClick={handleLogout}>Log out</ButtonStyled>
            </div>

        </ContainerStyled>


    )
}

export default User