import { GET_DATA } from "../action/helper"

const INITIAL_STATE = {
    dataAPI: []
}

const apiReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case GET_DATA:
            return{...state, dataAPI: action.payload.response}
        default:
            return state
    }
}

export default apiReducer