import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import { useState } from "react";

function Login (){
     
    const [email, setEmail]= useState();
    const [password, setPassword]= useState();
    const [msg, setMsg]  =useState("")
    const navigate = useNavigate();
    function handleChange(e){
        const value =e.target.value;
        const name= e.target.name;
      
        if("email"==name){
           setEmail(value)
        }
        if("password"==name){
            setPassword(value)
        }
    }
    function handelSubmit(e){

           e.preventDefault();
           if(email==""|| password==""){
            alert("Please Enter Details")
           }else{

          
        let getDetails =JSON.parse(localStorage.getItem("user"))
        
        getDetails.map((e)=>{
            let storeEmail=e.email;
            let storePassword= e.password;

            if(storeEmail==email&& storePassword==password){
                alert("Login Successfully !")
                navigate("/");
            }else{
                 setMsg("Invalide Email & Password")
                  
            }
        })
    }

    }
    return(
        <>
        <p>{msg}</p>
        <div className="form">
            
            <form onSubmit={handelSubmit} className="formData">
                <h3>Log In</h3>
                <input type="email" name="email" placeholder="Enter your Email" onChange={handleChange}/>
                <input type="password" name="password" placeholder="Enter your Password" onChange={handleChange} />
                <p>If you have to create account? <Link to={"/profile"}>SingUp</Link></p>
                <button id="button1">Login</button>
            </form>
        </div>
        </>
    )
}
export default Login