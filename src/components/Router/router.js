import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from "../NavBar/NavBar"
import Transactions from "../Transactions/transactions"
import Profile from "../Profile/profile"
import Payments from "../Payments/payments"


function Router() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="payments" data-testid='paymentRoute' element={<Payments/>}/>

                <Route path="/" element={<Transactions/>}/>
            
                <Route path="profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default Router