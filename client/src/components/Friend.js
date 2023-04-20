import React from 'react'
import { Avatar, Button, Typography } from 'antd'
import styled from 'styled-components'


const ContainerStyled = styled.div`
    display:flex;
    justify-content: space-between;
    border-bottom: 1px outset rgba(82,38,83);
    padding: 1rem;
    height: inherit;
`


const AvatarStyled = styled(Avatar)`
    margin-right: 1rem;
`

export const Friend = (props) => {
    const user = props.name

    return (
        <ContainerStyled>
            <div>
                <AvatarStyled src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKoeGTG2evu2zrPJadEAHCnm7BK5AJynLIw8BpQzZ&s" />
                <Typography.Text>{user}</Typography.Text>
            </div>
        </ContainerStyled>


    )
}

export default Friend