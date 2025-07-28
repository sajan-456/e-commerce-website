import React, { useEffect, useState } from "react";

import {Link} from 'react-router-dom'
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { LiaSortSolid } from "react-icons/lia";
import './manProduct.css'
import Product1 from "./Manproduct/Product1";
// import { items } from "./Data";
function ManProduct({items}){

   
   // filter pannel
   const [isChecked, settChecked] =useState(false);
    function handleCheckBoxChange(e){
        settChecked(e.target.checked);
    };


   const [newData,setNewData] = useState([])
   
   
      useEffect(()=>{
        // if(newData.length===0){
            setNewData(items)
            // console.log(newData);
       // }
      },[items])
        
        
      
             const filterByColor=(category)=>{
             const element=items.filter((product)=>product.color===category)
             setNewData(element)
             if(element.length===0){
             setNewData([{error:"Available Soon"}])
             }
           } 


             const  filterByCategory=(category)=>{
             const element=  items.filter((product)=>product.category===category)
            setNewData(element)
            if(element.length===0){
                setNewData([{error:"Available Soon"}])
            } 
        }  
        /// clear
       
     
    return(
        <>
      
        <div className="mains">
        <div className={`filters ${isChecked ? 'active':'' }`}>
             <h4 >FILTERS</h4>
             <h4>CLEAR</h4>


        <div className="categories">
             <p>CATEGORY</p>
             <input type="radio" value="Shirt"  name="category"onChange={()=>filterByCategory("shirt")}/>Shirt <br/>
             <input type="radio" value="T-shirt" name="category" onClick={()=>filterByCategory("T-shirt")}/>T-shirt<br/>
             <input type="radio" value="jeans" name="category" onClick={()=>filterByCategory("pant")}/>Pant
        </div>
        <div className="Price">
             <p>Price</p>
             <input type="range"/>
             <p> Rs.500 - 1000+</p>
        </div>
        <div className="color">
         <p>Color</p>
         <input type="radio" name="color" onClick={()=>filterByColor("green")} />
          Green <br/>
         <input type="radio" name="color" onClick={()=>filterByColor("pink")}/>
          Pink <br/>
         <input type="radio" name="color" onClick={()=>filterByColor("blue")}/>
          Blue <br/>
         <input type="radio" name="color" onClick={()=>filterByColor("red")}/>
            Red <br/>
            <input type="radio" name="color" onClick={()=>filterByColor("yellow")}/>
            Yellow <br/>
            <input type="radio" name="color" onClick={()=>filterByColor("black")}/>Black<br/>
                       

        </div>
        </div>
        <div className="filters-Icon">
          <div className="sortI">
          <input type="checkbox" 
          id="S-Icon"
          checked={isChecked}
          onChange={handleCheckBoxChange}/>
          <label htmlFor="S-Icon" id="Icon-position">
          <LiaSortSolid className="S-Logo"/><p>SORT</p>
          
          </label>
         
          </div>
          <div className="filterI">
          <input type="checkbox" 
          id="F-Icon"
          checked={isChecked}
          onChange={handleCheckBoxChange}/>
          <label htmlFor="F-Icon" id="Icon-position">
          <PiSlidersHorizontalLight className="F-Logo"/>
           <p>FILTER</p> 
          </label>
          </div>
          
         </div>
        <div className="myProduct">
                
         {
         newData &&  newData.map((products)=>{
            
             return(
                 <>
                   <div className="iteam" key={products.id}>
                <Link to={`/product1/${products.id}`}>  <img src={products.image} alt="img"/></Link>
                    <div className="ProductInformation">
                    <del>{products.del}</del>
                    <i>({products.off}% off)</i>
                    <p>Rs.{products.price}</p>
                    <p id="error">{products.error}</p>
                    </div>
                   
                </div>     
                 </>
             )
            })
           
         }
                
            
            </div>
        </div>
       
        </>
    )
}
export default ManProduct