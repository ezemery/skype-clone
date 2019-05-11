import {getMessages} from "../static-data";
import {SEND_MESSAGE} from "../contants/contant-types";
import _ from "lodash";

export default function messages(state = getMessages(10), action){
    switch(action.type){
        case SEND_MESSAGE:
        const {message, userId} = action.payload;
            const userMessages = state[userId];
            //returns the last key on the user messages objects a adds one to it
            //+ is used to make sure the the final output is a number and not a string 
            const number = +_.keys(userMessages).pop() + 1;
            //builds a new state and adds the previous messages plus the new message
            return Object.assign({}, state,{[userId]:{...userMessages, [number]:{number, text:message, is_user_msg:true}}})
        default:
            return state;
    }
    
}