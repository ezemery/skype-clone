import React,{ Component } from 'react'; 
import "./Main.css";
import Empty from "./Empty";
import ChatWindow from "../containers/ChatWindow";


export default class Main extends Component{
    renderMainComponent(){
       const {contacts, user, messages,typing, activeUserId} = this.props;
       if(!activeUserId){
           return <Empty user={user} activeUserid={activeUserId}/>
       }
        else{
            return <ChatWindow contacts={contacts} messages={messages} typing={typing} activeUserId={activeUserId}/>
        }
    }

    render(){
        return(
            <div className="main">{this.renderMainComponent()}</div>
        )
    }
}