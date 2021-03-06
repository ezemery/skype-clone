import React, {Component} from "react";
import "./Chats.css";

 const Chat = ({message})=>{
    const {text, is_user_msg} = message;
    return(
        <span className={`chat ${is_user_msg ? "is-user-msg" : ""}`}
        >{text}</span>
    );
 }

export default class Chats extends Component{
    constructor(props){
        super(props);
        this.chatRef = React.createRef();
       
    }

    scrollToBottom = ()=>{
        this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
    }
    componentDidMount(){
        this.scrollToBottom();
    }
    componentDidUpdate(){
        this.scrollToBottom();
    }
    render(){
        return(
            <div className="chats" ref={this.chatRef}>
                    {this.props.messages.map(message => {
                    return(
                        <Chat message={message} key={message.number}/>
                    );
                })}
            </div>
        )
    }
}