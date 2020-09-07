import Axios from "axios"
import {GET_DATA} from "./helper"

export const getData = (body) =>{
    return async(dispatch)=>{
        try {
            const res = await Axios ({
                "method":"GET",
                    "url":"https://covid-193.p.rapidapi.com/statistics",
                    "headers":{
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"covid-193.p.rapidapi.com",
                    "x-rapidapi-key":"6eef440f40msh5d72992e7bd50e7p1fb1b8jsn7ba52b17e81a",
                    "useQueryString":true}
            })
            console.log(res)
            dispatch({type: GET_DATA, payload: res.data})
        } catch (error) {
            console.log(error.response? error.response.data : error)
        }
    }
}