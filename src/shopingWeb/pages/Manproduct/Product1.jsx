import React, { useEffect, useRef, useState } from "react"

import {Link, useParams} from 'react-router-dom'
import ManProduct from "../ManProduct"
import './pro.css'
import { items } from "../Data"
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";


function Product1 ({cart, setCart}){
    const addTocart = (id,price,about,image)=>{
        const obj={
            id,price,about,image
        }
        setCart(...cart, obj);
        console.log("cart element=",cart)
    }


    const{id}=useParams()
    const [product, setPrduct]=useState({})
    const[releted, setReleted]= useState()
    useEffect(()=>{
        
        const finalProduct= items.filter((product)=> product.id==id)
           setPrduct(finalProduct[0]);
           const reletedProduct=items.filter((p)=> p.off===product.off ||p.color===product.color||p.category===product.category)
        //    console.log(reletedProduct)
        setReleted(reletedProduct)
       
    },[id,product.price])
        
    
     function shoeMasseg(){

        return alert("Order Successfull")
     }
    //   function addToCart(){

    //     return alert("Add Successfull")
    //  }
     const dispatch = useDispatch();

   
    return(
        <>
        
        <div className="product">
            <div className="section" >
               
            <img src={product.image} alt=""/>
            <div className="about">
                <div className="about1">
                <h2>Classic look</h2>
                <p>{product.about}</p>
                <p>Ratings -</p>
                <hr />
               
                <p> <del>MRP {product.del}</del> <i>({product.off}% OFF)</i></p>
                <h2 id="price">Rs.{product.price}</h2>
                <h3>Size</h3>
                <input type="checkbox" name="" id="" />40
                <input type="checkbox" name="" id="" />42
                <input type="checkbox" name="" id="" />44
                </div>

                <div className="button">
                   <button id="add" onClick={()=>dispatch(addToCart(product))}>ADD TO CART</button>
                <button onClick={shoeMasseg}>BUY NOW</button>
                </div>
               
            </div>
            </div>
           
        </div>
        <h2 id="Releted">Releted Product</h2>
        <div className="reletedProduct">
        {
          Array.isArray(releted)&&releted.map((product)=>{
             return(
                 <>
                   <div key={product.id} className="iteam" >
                   <Link to={`/product1/${product.id}`}>
                  <img src={product.image} alt="img"/></Link>
                   <p id="tittleHeading">Men Solid {product.color} {product.category}</p>
                    <del>{product.del}</del>
                    <i>({product.off}% off)</i>
                    <p id="price1">&#8377;{product.price}</p>
                </div>     
                 </>
             )
            })}
            </div>
        
        </>
    )
}
export default Product1