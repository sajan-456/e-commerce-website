import Product from './../project/Product'
import{Link} from 'react-router-dom'
import './New.css'
function Header(){
     
    return(
         <header>
        <h2>FASHION</h2>
        <div class="nav">
            <a href="#">HOME</a>
            
           <Link to={'/product'}>Product</Link>
            <a href="#">CATEGORY</a>
            <a href="#">CART</a>
            <button>SIGN UP</button>
        </div>
       
    </header>
    )
}
export default Header