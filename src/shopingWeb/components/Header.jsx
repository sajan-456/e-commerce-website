import './header.css'
import shoplogo from '../assets/home/WhatsApp .jpg'
import {Link, useNavigate}   from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { FaList } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";
import { useState, useRef, useEffect } from 'react';
import { use } from 'react';

function Header(){
    const navigate=useNavigate();
    const [searchItem, setSearch] =useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`/search/${searchItem}`)
        setSearch("")

    }

    const [isChecked, settChecked] =useState(false);
    function handleCheckBoxChange(e){
        settChecked(e.target.checked);
    };
//  click tab
     const[color, setColor]= useState();
        
     function changeColor(){
        setColor('green')
     }
    
 
    
    return(
        <>
        <header>
           
         <div className="logo">
         <input type="checkbox" 
            id='check1'
            checked={isChecked}
            onChange={handleCheckBoxChange}/>
            <label htmlFor="check1"> <FaList id="listI"/></label>
           
            <Link to={"/"}>
        <img src={shoplogo} alt=""/>
        </Link>    
            </div>
           
        <div className={`a ${isChecked ? 'active':'' }`}>
            <div className="hShop">
            <h3>Shop by Category</h3>
            <p>Explore more by Categories</p>
            </div>
            
            <Link to={'/man'} className='nav' style={{backgroundColor:color}} onClick={changeColor} >
            Man</Link> 
            <Link to={"/women"}className='nav' >Women</Link> 
            <Link to={"/kids"}className='nav' >Kids</Link>

            <Link to={'/manproduct'} className='newNav' id='man'>
            <h3 className='tag'>Man</h3> <h3 className='arrow'><IoIosArrowForward /></h3> 
            </Link> 
            <Link to={"/women"}className='newNav' id='women'>
            <h3 className="tag">Woman</h3><h3 className='arrow'><IoIosArrowForward /></h3>
            </Link> 
            <Link to={"/kids"}className='newNav' id='kide'>
            <h3 className="tag">Kid's</h3><h3 className='arrow'><IoIosArrowForward /></h3>
            </Link>
            <Link to={"/login"}className='newNav' id='login'>
              <h2>Login</h2>
            </Link>
          
        </div> 


        <form
         onSubmit={handleSubmit}
         className="search">
         <input 
         value={searchItem}
         onChange={(e)=>setSearch(e.target.value)}
         type="text" 
         placeholder="Search For Product" 
         id="search" />
        <FaSearch id='icon' />
        </form>
        

        <div className="profile">
        <Link to={"/profile"} >
         <div id='profile'>
         <CgProfile className='profileI' id="profile"/>
        <p className='nav2' id='profile'>
         profile</p>
         </div></Link>


         <Link to={"/profile"} >
         <div className="wish">
          <CiHeart id='wishI'/>
          <p className='nav2'>
          Wishlist
          </p>
         
    
         </div></Link>
         

         <div className="cart">
         <TiShoppingCart id="cartI" />
         <p className='nav2'>Cart</p>
         </div>
         
         {/* <button>login</button> */}
        </div>

    </header>
        </>
    )
}
export default Header