import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../page/Home";
import { Login } from "../page/Login";
import { User } from "../page/User";

export function MyRoute(){
return(
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/profil" element={<User/>}/>
<Route path="/error"/>
    </Routes>
)
}