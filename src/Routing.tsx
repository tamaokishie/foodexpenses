// home
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'

// search
import { Search } from './pages/search/search'


export default function Routing() {
    return(
        <Routes>
            <Route index element= {<Home />} />
            
            <Route path="search" element= {<Search />}>
            </Route>
        </Routes>
    )
}