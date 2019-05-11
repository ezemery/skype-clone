import React, {Component} from "react";
import {setActiveUserId} from "../action"
import "./User.css";
import store from "../store";

export default class User extends Component{
    handleUserClick(){
        store.dispatch(setActiveUserId(this.user_id))
    }
    render(){
        const {name, profile_pic, status} = this.props.user
        return(
            <div className="user" onClick={this.handleUserClick.bind(this.props.user)}>
                <img src={profile_pic} alt={name} className="user_img"/>
                <div className="user_details">
                    <p className="user_name">{name}</p>
                    <p className="user_status">{status}</p>
                </div>
            </div>
        )
    }
}