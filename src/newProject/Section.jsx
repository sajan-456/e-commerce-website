 import img1 from './assest/img1.svg'
 import brand1 from './assest/brand1.svg'
 import brand2 from './assest/brand2.svg'
 import brand3 from './assest/brand3.svg'
 import brand4 from './assest/brand4.svg'
 import brand5 from './assest/brand5.svg'
 import brand6 from './assest/brand6.svg'
 import img4   from './assest/img4.svg'
 import img2   from './assest/img2.svg'
 import img3   from './assest/img3.svg'
 import youngs from './assest/youngs2.svg'
 import youngs2 from './assest/youngs1.png'
 import img5   from './assest/img5.svg'
 
 
 function Section (){
      return(

        <>
        <div class="img">
        <div class="heading">
            <h1 id="h1">LET'S</h1>
            <h1 class="h2">EXPLORE</h1>
            <h1 id="h3">UNIQUE</h1>
            <h1 class="h2">CLOTHES.</h1>
            <p>Live for influential and innovative fashion!</p>
            <button>SHOP NOW</button>
        </div>
            <img src={img1}alt=""/>
        </div>

         {/* BrandRow */}
         <div class="brandrow">
            
            <img src={brand1} alt=""/>
             <img src={brand2} alt=""/>
              <img src={brand3} alt=""/>
               <img src={brand4} alt=""/>
                <img src={brand5} alt=""/>
                 <img src={brand6} alt=""/>
        </div>
        <div class="content">
            <h2>NEW ARRIVALS</h2>
            <div class="cbox">
                <div class="idiv">
                <img src={img4} alt=""/>
                <h3>Hoodies & Sweetshirt</h3>
                <p>Explore Now!</p>
                </div>
                <div class="idiv">
                <img src={img2} alt=""/>
                <h3>Coats & Parkas</h3>
                <p>Explore Now!</p>
                </div>
                <div class="idiv">
                 <img src={img3} alt=""/>
                 <h3>Tees & T-Shirt</h3>
                 <p>Explore Now!</p>   
                </div>
                
            </div>
        </div>
        {/* offdiv */}
        <div class="offdiv">
            <img src={img5} alt=""/>
            <div class="sale">
                <h3 id="h01">PAYDAY</h3>
                 <h3 id="h02">SALE NOW</h3>
                 <p>Spend minimum $ 100 get 30% off <br/>
                 voucher code for your next purchase</p>
                 <h2>10 June - 20 June 2025</h2>
                 <p>Term & Conditions apply</p>
                 <button>SHOP NOW</button>
            </div>
         </div>
         <div class="fav">
            <h2>Young's Favorite</h2>
            <div class="fimg">
                <div class="vimg">
                 <img src={youngs} alt=""/>
                 <h3>Treanding on Instagram</h3>
                 <p>Explore Now!</p>  
                </div>
                 <div class="vimg">
                 <img src={youngs2} alt=""/>
                  <h3>All Under $40 </h3>
                 <p>Explore Now!</p>  
                </div>
             
            </div>
         </div>
          <div class="toppick">
            <h2>Season's Top Picks</h2>
            <div class="subpick">
            <img src="" alt=""/>
            <img src="" alt=""/>
            <img src="" alt=""/>
            </div>
         </div>
         <div class="contact">
            <div class="email">
            <h2>JOIN SHOPPING COMMUNITY TO<bR/>
                GET MONTHLY PROMO</h2>
            <p>Type your email down below and be young wild genration</p>

            <input type="email" placeholder="Add your email here" name="" id=""/>
            <button>SEND</button>
            </div>

         </div>
        
        </>
         
      )
 }
 export default Section