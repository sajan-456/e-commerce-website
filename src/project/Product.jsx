import { useState } from "react"
import { useEffect } from "react"
import  './../project/Pro.css'

function Product() {
    const [product, setPoduct] = useState()




    useEffect(() => {
        async function getData() {
            
            let url = "https://fakestoreapi.com/products"
            let products = await fetch(url);
            let newProducts = await products.json();
            setPoduct(newProducts)
     
        }

        getData()
       
    },[])
     console.log("product"+product)


    return (
        <>
        
        
        {
           

            product && product.map((e)=>(
                <div class="main">
             
             <img src={e.image} alt="" class="img1" />
             <h3>{e.title}</h3>
              
              <h2>{e.price}</h2>
             </div>
            ))
            
        }
        </>
    )

}
export default Product