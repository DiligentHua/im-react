import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Index from "../view/index";
import Login from "../view/login/login";
export default function IndexRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element = {<Index/>}/>
                <Route path="/login" element = {<Login/>}/>
            </Routes>
        </HashRouter>
    )
}