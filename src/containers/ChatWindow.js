import React, {Component} from "react";
import "./ChatWindow.css" ;
import _ from "lodash";
import Header from "../components/Header";
import Chats from "./Chats"
import InputMessage from "./InputMessage";

export default class ChatWindow extends Component{
    render(){

        const {contacts, messages, typing, activeUserId} = this.props;
        const activeUser = contacts[activeUserId];
        const activeMessages = messages[activeUserId];
        return(
            
            <div className="chatWindow">
                <Header user={activeUser}></Header>
                <Chats messages={_.values(activeMessages)}/>
                <InputMessage typing={typing} activeUserId={activeUserId} value={typing}/>
            </div>
        )
    }
}