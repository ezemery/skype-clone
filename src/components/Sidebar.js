import React,{ Component } from 'react';
import User from "../containers/User"
import "./Sidebar.css";

export default class Sidebar extends Component{
    
    render(){
        return(
            <aside className="sidebar">{this.props.contacts.map(
                (contact) => (
                    <User key={contact.user_id} user={contact}/>
                )
            )}</aside>
        )
    }
}