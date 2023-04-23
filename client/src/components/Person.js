import React from 'react'
import { useSelector } from 'react-redux'

export const Person = ({ name }) => {
    return (
        <div className='person-container'>
            <div className='person-img'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-R4c-jnJRMpKve4e7mVawuYbGOgzX5SPWUWwCznT&s"></img>
            </div>
            <div className="person-infor">

                <div className="person-item">
                    <span> Person Name: {name}</span>
                </div>
                <div className="person-item">
                    <span> Lorem i?</span>
                </div>
            </div>
        </div>
    )
}

export default Person