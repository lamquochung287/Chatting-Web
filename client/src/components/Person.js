import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import styled from 'styled-components'


export const Person = ({ name, onClick }) => {
    return (
        <div className='person-container'>
            <div className='person-img'>
                <img style={{ width: '100%', height: '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-R4c-jnJRMpKve4e7mVawuYbGOgzX5SPWUWwCznT&s"></img>
            </div>
            <div className="person-infor">
                <div className="person-item">
                    <span style={{ fontWeight: 'bold', textTransform: "lowercase" }}> {name}</span>
                </div>
                {/* <div className="person-item">
                    <span> Lorem i?</span>
                </div> */}
            </div>
        </div>
    )
}

export default Person