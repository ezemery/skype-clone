import {SET_ACTIVE_USER_ID} from "../contants/contant-types";

export default function activeUserId(state=null, action){
    switch(action.type){
        case SET_ACTIVE_USER_ID:
        console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}