import React, { useState } from "react"

import Header from "./shopingWeb/components/Header"
import Section from "./shopingWeb/components/Section"
import Footer from "./shopingWeb/components/Footer"
import Man from "./shopingWeb/pages/Man"
import ManProduct from "./shopingWeb/pages/ManProduct"
import Product1 from "./shopingWeb/pages/Manproduct/Product1"
import Women from "./shopingWeb/pages/Women/Women"
import Kids from "./shopingWeb/pages/Kids/Kids"
import Profile from "./shopingWeb/pages/Profile/Profile"
import Login from "./shopingWeb/pages/profile/Login"
import Search from "./shopingWeb/components/Search"
// import Registration from "./components/Registration"
// import Layout from "./pages/Layout"
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from "./pages/Contact"
import { items } from "./shopingWeb/pages/Data"
import {BrowserRouter, Route, Routes} from 'react-router-dom'



function App() {
  const [data, setData] =useState([...items])
  const [cart, setCart] =useState([])
  return (
    <>
    <BrowserRouter>
  
   <Header/>

    <Routes>
        
        <Route element={<Section/>}path="/"/>
        <Route element ={<Search/>}path="/search/:term"/>
        <Route element={<Man/>}path="/man"/>
        <Route element={<Women/>}path="/women" />
        <Route element={<Kids/>}path="/Kids"/>
        <Route element={<ManProduct items={data} setDatas={setData}/>}path="/manproduct"/>
        <Route element={<Product1/>} cart={cart} setCart={setCart} path="/product1/:id" />
        <Route element={<Profile/>} path="/profile"/>
        <Route element={<Login/>} path="/login"/>

        
            
      {/* <Route element={<Layout/>}path="/">
       <Route element={<Home/>} path="" index/>
       <Route element={<About/>} path="about"/>
       <Route element={<Contact/>} path="contact"/>
       <Route element={ <Registration/>} path="/reg"/>
      </Route> */}
      

    </Routes>
   <Footer/>
   
    </BrowserRouter>
     
    </>
  )
}

export default App
