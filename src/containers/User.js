import React, {Component} from "react";
import {setActiveUserId} from "../action"
import {connect} from "react-redux";
import "./User.css";

 class User extends Component{
     constructor(props){
         super(props);
         this.handleUserClick = this.handleUserClick.bind(this);
     }
    handleUserClick(){
        this.props.setActiveUserId(this.props.user.user_id);
    }
    render(){
        const {name, profile_pic, status} = this.props.user
        return(
            <div className="user" onClick={this.handleUserClick}>
                <img src={profile_pic} alt={name} className="user_img"/>
                <div className="user_details">
                    <p className="user_name">{name}</p>
                    <p className="user_status">{status}</p>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        setActiveUserId : (value) => dispatch(setActiveUserId(value))
    }
}

export default connect(null, mapDispatchToProps)(User);