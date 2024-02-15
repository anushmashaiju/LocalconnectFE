import React from "react";
import {Navigate,Outlet} from 'react-router-dom'

export function UserAuth(){
    const token=localStorage.getItem('token')

    return(
        token? <Outlet/> : <Navigate to ='/' />
    )
}
export function LoginAuth() {
    const token=localStorage.getItem('token')
    return(
        token ? <Navigate to ='/home'/> :<Outlet/>   //if token present navigate to home page otherwise go to outlet
    )
    
}