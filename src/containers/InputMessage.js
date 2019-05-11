import React from "react";
import store from "../store";
import {setTypingValue, sendMessage}  from "../action"
import "./InputMessage.css"

export default function InputMessage({value}){
    const state = store.getState();
    const {typing, activeUserId} = state;
    const handleSubmit = (e) =>{
        e.preventDefault();
        store.dispatch(sendMessage(typing, activeUserId));
    }
    const handleInput = e => {
        store.dispatch(setTypingValue(e.target.value));
    }
    return(
        <form className="message" onSubmit={handleSubmit}>
            <input className="message_input" onChange={handleInput} value={value} placeholder="write a message"/>
        </form>
    )
}