import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {setCredentials, logout} from "../../features/auth/authSlice"


const baseQuery =fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    credentials:'include',
   prepareHeaders: (headers, {getState}) =>{
    const token = getState().auth.token
    if(token){
        headers.set("authorization", `Brearer $(token)`)

    }
    return headers
   }
})
const baseQuerywithReauth = async (args, api, extraOptions)
if(result?.error?.originalStatus === 403) {
    console.log('sending refresh token')
    // send refresh token to get new access token
    const refreshResult= await baseQuery('/refresh', api, extraOptions)
    if(refreshResult?.data){
        const user = api.getState().auth.user
    }
}