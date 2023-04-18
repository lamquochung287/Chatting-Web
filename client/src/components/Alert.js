import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

// props have message and status (success, error)
const Alert = (props) => {
    return (
        <div className="alert-box">
            {
                props.status === true ?
                    <DoneIcon style={{ backgroundColor: "#0be428", borderRadius: "2rem", color: "white", marginRight: "0.5rem" }}></DoneIcon>
                    :
                    <CloseIcon style={{ backgroundColor: "red", borderRadius: "2rem", color: "white", marginRight: "0.5rem" }}></CloseIcon>
            }
            <span style={{ wordWrap: "break-word" }}>
                {props.message}
            </span>
        </div>
    )
}

export default Alert