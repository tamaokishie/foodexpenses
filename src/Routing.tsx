// home
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'

// search
import { Search } from './pages/search/Search'


export default function Routing() {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element= {<Home />} />
            
            <Route path="search" element= {<Search />} />
        </Routes>
        </BrowserRouter>
    )
}