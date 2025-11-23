import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";
import './cart.css'
function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
        <>
            <h2 className="cartHead">My Cart</h2>
            <div>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <div className="mainCart">
                            {cartItems.map((item) => (
                                <div >
                                    <div key={item.id} className="cartProduct">
                                        <div> <img src={item.image} alt="img" /></div>
                                        <div className="cartProductInfo">
                                            <p id="about">{item.about}</p>
                                            <p>{item.category} - {item.color}</p>
                                            <p id="priceF"><span className="off"> {item.off}%</span><span className="del">{item.del}</span> ₹{item.price}</p>
                                            <p>Qty: {item.quantity}</p>
                                            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button></div>

                                    </div>
                                </div>

                            ))}</div>

                        <h3>Total: ₹{total}</h3>
                        <button id="clearCart" onClick={() => dispatch(clearCart())}>Clear Cart</button>
                    </>
                )}
            </div>
        </>

    );
}

export default Cart;
