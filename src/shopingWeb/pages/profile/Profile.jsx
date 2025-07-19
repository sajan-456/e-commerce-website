import { useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './profile.css'
function Profile (){
    const [data, setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const navigate= useNavigate()
    function handleChange(e){
        // console.log(e.target.value)
        // console.log(e.target.name)
        const name=e.target.name;
        const value=e.target.value

        setData({...data,[name]:value}) //spred opretor
        
    }
      function handleSubmit(e){
             e.preventDefault();
             if(data.name==""|| data.email=="" || data.password.length<8){
                if(data.name=""){
                    alert("please Enter valide name");
                
                }  if(data.email=""){
                    alert("please Enter valide email");
                } if(data.password.length<8){
                    alert("password is less than 8");
                }
               
                
               
             }else{
            const getData= JSON.parse(localStorage.getItem("user")||"[]");
            let arr=[];
            arr=[...getData];
            arr.push(data);
            localStorage.setItem("user",JSON.stringify(arr));
            alert("SignUp Sucessfuly");
            
            navigate("/login")
        }
      }
    
    
    return(
        <>
        <div className="form">
            <form onSubmit={handleSubmit} className='formData'>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Name" name='name' onChange={handleChange}/>
            <input type="email" placeholder="Email ID" name='email' onChange={handleChange}/>
            <input type="password" placeholder="Password" name='password' onChange={handleChange}/>
            <p>If you have alredy account? <Link to={"/login"}>Login</Link></p>
            <button type='submit' value={'submit'} id='button1'>sing up</button>
            
            </form>
        </div>
        </>
    )
}
export default Profile