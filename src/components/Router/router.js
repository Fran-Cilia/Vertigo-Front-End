import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from "../NavBar/NavBar"


function Router() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="transactions">Pay</Route>

                <Route path="transactions">Transactions</Route>
            
                <Route path="profile">Profile</Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Router