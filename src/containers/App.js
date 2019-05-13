import React from 'react';
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import './App.css';
import { connect } from "react-redux";
import _ from "lodash";


function App(props) {
  //let {contacts, user, activeUserId}  = store.getState();
  return (
    <div className="App">
      <Sidebar contacts = {_.values(props.contacts)} />
      <Main {...props}/>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    contacts: state.contacts.contacts,
    user: state.user,
    typing: state.typing,
    messages: state.messages,
    activeUserId: state.activeUserId
  }
}

export default connect(mapStateToProps, null)(App);


