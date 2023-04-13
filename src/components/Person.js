
import React from 'react'

export const Person = (props) => {
    return (
        <div className='person-container'>
            <div className='person-img'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-R4c-jnJRMpKve4e7mVawuYbGOgzX5SPWUWwCznT&s"></img>
            </div>
            <div className="person-infor">

                <div className="person-item">
                    <span> Person Name: {props.username}</span>
                </div>
                <div className="person-item">
                    <span> Person Age: {props.username}</span>
                </div>
                <div className="person-item">
                    <span> Person Gender: {props.username}</span>
                </div>
            </div>
        </div>
    )
}

export default Person
