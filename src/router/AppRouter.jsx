import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {GlobalStyles} from '../components/globalStyles/GlobalStyles'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/About'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <GlobalStyles/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='about' element={<PrivateRouter/>}>
                <Route path='' element={<About/>}/>
            </Route>
            <Route path='detail' element={<PrivateRouter/>}>
                <Route path='' element={<Detail/>}/>
            </Route>
            
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter