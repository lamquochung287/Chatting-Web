import React from 'react'

export const ButtonCustom = (props) => {
    return (
        <div>
            <button className={props.process} type="submit" disabled={props.disabled}>{props.name}</button>
        </div>
    )
}
