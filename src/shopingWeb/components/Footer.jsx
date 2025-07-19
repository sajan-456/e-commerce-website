import React from "react";
import googlei from '../assets/home/Google Play.svg'
import applei  from '../assets/home/Play Store.svg'
import './Footer.css'

function Footer(){
    return(
        <>
       <footer>
        <div className="f1">
            <h4>Online Fashion</h4>
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Sports</li>
            </ul>
        </div>
        <div className="f1">
            <h4>About</h4>
            <ul>
                <li>About Us</li>
                <li>Conact Us</li>
                <li>Help</li>
                <li>Corporate information</li>
            </ul>
        </div>
        <div className="f1">
            <h4>About</h4>
            <ul>
                <li>About Us</li>
                <li>Conact Us</li>
                <li>Help</li>
                <li>Corporate information</li>
            </ul>
        </div>
       
        <div className="f1">
            <h4>About</h4>
            <ul>
                <li>About Us</li>
                <li>Conact Us</li>
                <li>Help</li>
                <li>Corporate information</li>
            </ul>
        </div>
        <div className="f1">
            <h4>Experince Myntra App On Mobile</h4>
            <img src={googlei} alt=""/>
            <img src={applei} alt=""/>
        </div>
    </footer>
        </>
    )
}
export default Footer