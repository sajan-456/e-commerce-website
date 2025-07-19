 import React from "react"
 import {Link, Outlet} from 'react-router-dom'
 
 import './Layout.css'
 function Layout (){
    return(
        <>
        <section>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'about'}>About</Link>
            <Link to={'contact'}>Contact</Link>
            <Link to={'/reg'}>Registration</Link>
        </nav>
        <div className="page">
            <Outlet/>
        </div>
        </section>
        </>
    )
}
export default Layout