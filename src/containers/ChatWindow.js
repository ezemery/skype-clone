import React, {Component} from "react";
import "./ChatWindow.css" ;
import _ from "lodash";
import Header from "../components/Header";
import store from "../store";
import Chats from "./Chats"
import InputMessage from "./InputMessage";

export default class ChatWindow extends Component{
    render(){
        const state = store.getState();
        const {activeUserId} = this.props;
        const activeUser = state.contacts.contacts[activeUserId];
        const {typing} = state;
        const activeMessages = state.messages[activeUserId];
        return(
            
            <div className="chatWindow">
                <Header user={activeUser}></Header>
                <Chats messages={_.values(activeMessages)}/>
                <InputMessage value={typing}/>
            </div>
        )
    }
}