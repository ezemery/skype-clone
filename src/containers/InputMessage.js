import React from "react";
import { connect } from "react-redux";
import {setTypingValue, sendMessage}  from "../action"
import "./InputMessage.css"

function InputMessage({typing, activeUserId, value,sendMessage,setTypingValue}){
    const handleSubmit = (e) =>{
        e.preventDefault();
        sendMessage(typing, activeUserId);
    }
    const handleInput = e => {
       setTypingValue(e.target.value);
    }
    return(
        <form className="message" onSubmit={handleSubmit}>
            <input className="message_input" onChange={handleInput} value={value} placeholder="write a message"/>
        </form>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        sendMessage: (typing, activeUserId) =>dispatch(sendMessage(typing, activeUserId)),
        setTypingValue : (eventTarget) => dispatch(setTypingValue(eventTarget)) 
    }
}

export default connect(null, mapDispatchToProps)(InputMessage);