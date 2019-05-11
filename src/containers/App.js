import React from 'react';
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import './App.css';
import store from '../store';
import _ from "lodash";


function App() {
  let {contacts, user, activeUserId}  = store.getState();
  return (
    <div className="App">
      <Sidebar contacts = {_.values(contacts.contacts)} />
      <Main user={user} activeUserId={activeUserId}/>
    </div>
  );
}

export default App;
