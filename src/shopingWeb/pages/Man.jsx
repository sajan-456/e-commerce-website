import Bimg from './assets/backgroundimg.png'
import delivery from '../assets/home/delivery_icons.png'
import returni from '../assets/home/return-removebg.png'
import Qicon from '../assets/home/quality_icons.png'
import security from '../assets/home/Security_icons.png'
import trend1 from './assets/trendigshirt1.jpg'
import trend2 from './assets/treding3.jpg'
import trend3 from './assets/trendigshort.jpg'
import trend4 from './assets/trendig2.jpg'
import trend5 from './assets/Textured Button Down Shirts Casual Jacket.jpeg'
import trend6 from './assets/Classic Rectangle  Sunglasses.jpeg'
import trend7 from './assets/Men Sneakers Trend Casual.jpeg'
import trend8 from './assets/lower1.jpeg'
import trend9 from './assets/Lower for men.jpeg'
import trend10 from './assets/Men Sneakers.jpeg'
import trend11 from './assets/Slippers White Sandals.jpeg'
import trend12 from './assets/greyJacket.jpeg'

import cryzy1 from './assets/mshirt1.jpeg'
import cryzy2 from './assets/formalpant.jpeg'
import cryzy3 from './assets/mshirt4.jpeg'
import cryzy4 from './assets/mshirt6.jpeg'
import cryzy5 from './assets/mshirt18.jpeg'
import { Link } from 'react-router-dom'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';

import './man.css'
import ManProduct from './ManProduct'
function Man() {
  return (
    <>
      <div className="man">
        <div className="Mbanner" >
          <div className="dialoges" >
            <h2>The New Summer<br />
              Collection</h2>
            <h4>50% Off</h4>
            <p>from 1 - 15 June</p>
            <button>Shop Now</button>
          </div>
          <img src={Bimg} alt="" />
        </div>
      </div>

      <div className="promies">
        <div className="pro1">
          <img src={delivery} alt="" />
          <div>
            <h4>Free Delivery </h4>
            <p>On order above $25</p></div>
        </div>
        <div className="pro1">
          <img src={returni} alt="" />
          <div>
            <h4>Easy Returns </h4>
            <p>7 Day free return</p></div>
        </div>
        <div className="pro1">
          <img src={Qicon} alt="" />
          <div>
            <h4>High Quality </h4>
            <p>Primium quality products</p></div>
        </div>

        <div className="pro1" id='hide'>
          <img src={security} alt="" />
          <div>
            <h4>Security Guarantee </h4>
            <p>100% Secured shopping experience</p></div>
        </div>
      </div>


      <div className="trend">
        <span className='trendH'>Trending product</span>
        {/* <div className="trendSlide"> */}
        {/* firstslide */}
        <Swiper navigation={true} pagination={true}
          autoplay={true} slidesPerView={1} spaceBetween={0} modules={[Navigation, Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className="trendImg">
              <Link to={"/manproduct"}>
                <div className="Timg">

                  <img src={trend1} alt="" />
                  <h4>UNDER <del>$300</del> $150</h4>
                  <p>Classics look</p>
                </div> </Link>
              <Link to={"/manproduct"}>
                <div className="Timg">
                  <img src={trend2} alt='' />
                  <h4>UNDER <del>$250</del> $120</h4>
                  <p>Change treand</p>
                </div></Link>
              <Link to={"/manproduct"}>
                <div className="Timg">
                  <img src={trend3} alt="" />
                  <h4>UNDER <del>$220</del> $100</h4>
                  <p>Casual short</p>
                </div></Link>
              <Link to={"/manproduct"}>
                <div className="Timg">
                  <img src={trend4} alt="" />
                  <h4>UNDER <del>$280</del> $170</h4>
                  <p>Get trend</p>
                </div></Link>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="trendImg">
              <Link to={"/manproduct"}>
                <div className="Timg">
                  <img src={trend5} alt="" />
                  <h4>UNDER <del>$300</del> $150</h4>
                  <p>Casual Jacket's</p>
                </div>  </Link>
              <Link to={"/manproduct"}>
                <div className="Timg">
                  <img src={trend6} alt='' />
                  <h4>UNDER <del>$220</del> $120</h4>
                  <p>Rectangle Sunglasses</p>
                </div></Link>
              <Link to={"/manproduct"}>
                <div className="Timg">
                  <img src={trend7} alt="" />
                  <h4>UNDER <del>$220</del> $100</h4>
                  <p>Men Sneakers</p>
                </div></Link>
              <Link to={"/manproduct"}>
                <div className="Timg">
                  <img src={trend8} alt="" />
                  <h4>UNDER <del>$280</del> $170</h4>
                  <p>Lower for Man</p>
                </div></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="trendImg">
              <Link to={"/manproduct"}>
                <div className="Timg">
                  <img src={trend9} alt="" />
                  <h4>UNDER <del>$300</del> $150</h4>
                  <p>Lower for man</p>
                </div></Link>
              <Link to={"/manproduct"}>
                <div className="Timg">
                  <img src={trend10} alt='' />
                  <h4>UNDER <del>$250</del> $120</h4>
                  <p>Men Sneckers</p>
                </div></Link>
              <Link to={"/manproduct"}>
                <div className="Timg">
                  <img src={trend11} alt="" />
                  <h4>UNDER <del>$220</del> $100</h4>
                  <p>Slippers Sandals</p>
                </div></Link>
              <Link to={"/manproduct"}>
                <div className="Timg">
                  <img src={trend12} alt="" />
                  <h4>UNDER <del>$280</del> $170</h4>
                  <p>Man's Jacket</p>
                </div></Link>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
      <div className="deals">
        <h3 id="CHeading">Cryzy Deals</h3>
        <div className="dealsImg">

          <div className="cryzy">
            <Link to={'/manProduct'}>
              <img src={cryzy1} alt="" /></Link>
            <h4>Save Up to $100</h4>
            <h3>40% Off</h3>
          </div>
          <div className="cryzy">
            <Link to={'/manProduct'}>
              <img src={cryzy2} alt="" /></Link>
            <h4>Buy 1 Get1</h4>
            <h3>Free</h3>
          </div>
          <div className="cryzy">
            <Link to={'/manProduct'}>
            <img src={cryzy3} alt="" /></Link>
            <h4>Save Up to $100</h4>
            <h3>70% Off</h3>
          </div>
          <div className="cryzy">
            <Link to={'/manProduct'}>
            <img src={cryzy4} alt="" /></Link>
            <h4>Get a Chance to</h4>
            <h3>Win Free</h3>
          </div>
          <div className="cryzy">
            <Link to={'/manProduct'}>
            <img src={trend6} alt="" /></Link>
            <h4>Cryzy Deals</h4>
            <h3>98% Off</h3>
          </div>
          <div className="cryzy">
            <Link to={'/manProduct'}>
            <img src={cryzy5} alt="" /></Link>
            <h4>Cryzy Deals</h4>
            <h3>98% Off</h3>
          </div>

        </div>
      </div>
      {/* ----ShopByCategary--- */}
      <div className="shop">
        <h3>Shop By Categary</h3>
        <div className="shopCat">

          <div className="CatImg">
            <img src={trend12} alt="" />
            <h4>50-60% Off</h4>
            <p>Shop Now</p>
          </div>
          <div className="CatImg">
            <img src={trend11} alt="" />
            <h4>50-65% Off</h4>
            <p>Shop Now</p>
          </div>
          <div className="CatImg">
            <img src={trend10} alt="" />
            <h4>30-40% Off</h4>
            <p>Shop Now</p>
          </div>
          <div className="CatImg">
            <img src={trend9} alt="" />
            <h4>50-60% Off</h4>
            <p>Shop Now</p>
          </div>
          <div className="CatImg">
            <img src={trend8} alt="" />
            <h4>20-30% Off</h4>
            <p>Shop Now</p>
          </div>
          <div className="CatImg">
            <img src={trend7} alt="" />
            <h4>40-60% Off</h4>
            <p>Shop Now</p>
          </div>
          <div className="CatImg">
            <img src={trend6} alt="" />
            <h4>70-80% Off</h4>
            <p>Shop Now</p>
          </div>
          <div className="CatImg">
            <img src={trend5} alt="" />
            <h4>30-50% Off</h4>
            <p>Shop Now</p>
          </div>
          <div className="CatImg">
            <img src={trend4} alt="" />
            <h4>20-30% Off</h4>
            <p>Shop Now</p>
          </div>
          <div className="CatImg">
            <img src={trend3} alt="" />
            <h4>10-20% Off</h4>
            <p>Shop Now</p>
          </div>
          <div className="CatImg">
            <img src={trend2} alt="" />
            <h4>40-50% Off</h4>
            <p>Shop Now</p>
          </div>
          <div className="CatImg">
            <img src={trend1} alt="" />
            <h4>50-70% Off</h4>
            <p>Shop Now</p>
          </div>
          <div className="CatImg">
            <img src={trend10} alt="" />
            <h4>20-40% Off</h4>
            <p>Shop Now</p>
          </div>
          <div className="CatImg">
            <img src={trend11} alt="" />
            <h4>70-90% Off</h4>
            <p>Shop Now</p>
          </div>
        </div>
      </div>

    </>
  )
}
export default Man