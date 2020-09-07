import {LOGIN, LOGIN_END, LOGIN_START, LOGIN_ERROR, KEEP_LOGIN, KEEP_LOGIN_END, KEEP_LOGIN_START, LOGOUT} from "../action/helper"

const INITIAL_STATE ={
    user_id: null,
    username: "",
    email: "",
    role: "",
    status: null,
    token: "",
    loading: false,
    error: false,
    authloading: false
}

const userReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case LOGIN:
            return{...state,
                username: action.payload
            }
            case LOGIN_START:
                return{
                    ...state,
                    loading: true
                }
            case LOGIN_END:
                return{
                    ...state,
                    loading: false            
                }
            case LOGIN_ERROR:
                return{
                    ...state,
                    loading: false,
                    error: action.payload            
                }
            case KEEP_LOGIN_START:
                return { ...state, authloading: true}
            case KEEP_LOGIN_END:
                return {...state, authloading: false}
            case KEEP_LOGIN:
                return{...state,
                        username: action.payload
                }
            case LOGOUT:
                return INITIAL_STATE
            default:
                return state
    }
}

export default userReducer