// home
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
