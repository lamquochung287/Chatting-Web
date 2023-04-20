import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Avatar, Button, Typography } from 'antd'
import styled from 'styled-components'
import { logout } from '../../features/login/loginSlice'
import { toast } from 'react-toastify';


const ContainerStyled = styled.div`
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(82,38,83);
    padding: 1rem;
`

const ButtonStyled = styled(Button)`
    background: rgba(0,0,0,0.1);
`

const AvatarStyled = styled(Avatar)`
    margin-right: 1rem;
`

// props: if slidebar component get information of user else chatbar get information of friend chatting hidden log out button
export const User = () => {
    const { user } = useSelector((state) => state.login)
    const dispatch = useDispatch()
    const handleLogout = () => {
        toast.success(`${user.username} log out success`)
        dispatch(logout())
    }
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