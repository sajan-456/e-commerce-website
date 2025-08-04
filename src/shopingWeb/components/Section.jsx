import img1 from '../assets/home/img1.svg'
import brand1 from '../assets/home/brand1.png'
import brand2 from '../assets/home/brand2.png'
import brand3 from '../assets/home/brand3.png'
import brand4 from '../assets/home/brand4.png'
import brand5 from '../assets/home/brand5.png'
import delivery from '../assets/home/delivery_icons.png'
import returni from '../assets/home/return-removebg.png'
import Qicon from '../assets/home/quality_icons.png'
import security from '../assets/home/Security_icons.png'
import shirtBrand1 from '../assets/bestSeller/edgeshirt.jpeg'
import manbrand2 from '../assets/bestSeller/stingShirt.jpeg'
import manbrand3 from '../assets/bestSeller/boldpant.jpeg'
import manbrand4 from '../assets/bestSeller/longshirt.jpeg'
import wbrand1 from '../assets/bestSeller/wlehengBrand.jpeg'
import wbrand2 from '../assets/bestSeller/wbestsellerBrand.jpeg'
import wbrand3 from '../assets/bestSeller/womanBrand.jpeg'
import wbrand4 from '../assets/bestSeller/womanKbrand.jpeg'
import kidbrand1 from '../assets/bestSeller/kid Brannd.jpeg'
import kidbrand2 from '../assets/bestSeller/kidsbrand.jpeg'
import kidbrand3 from '../assets/bestSeller/kidsbrand2.jpeg'
import kidbrand4 from '../assets/bestSeller/kidsbrandName.jpeg'
import Sbrand1 from '../assets/bestSeller/SBrend2.jpeg'
import Sbrand2 from '../assets/bestSeller/SBrand1.jpeg'
import Sbrand3 from '../assets/bestSeller/Sbrand3.jpeg'
import Sbrand4 from '../assets/bestSeller/sportBrand.jpeg'
import Tbrand from '../assets/home/greyJacket.jpeg'
import Tbrand2 from '../assets/home/Men Sneakers.jpeg'
import Tbrand3 from '../assets/home/Textured Button Down Shirts Casual Jacket.jpeg'
import Tbrand4 from '../assets/home/lower1.jpeg'
import homebanner from '../assets/home/homeBanner.png'
import homebanner2 from '../assets/home/homeBanner3.png'
import homebanner3 from '../assets/home/homeBanner4.png'

import { Link } from "react-router-dom"
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Section.css'
function Section() {
  return (
    <>
    
      <div className="otbanner">
      
        <Swiper className='mainSwiper' navigation={true} pagination={true} autoplay={true} slidesPerView={1} spaceBetween={0} modules={[Navigation, Pagination, Autoplay]} >
          <SwiperSlide className='swiperSlide'>
            <div className="banner1">
              <div className="Bpart1">

                <h1>LET'S <br />
                  EXPLORE<br />
                  UNIQUE<br />
                  CLOTHS.</h1>
                <h4>Save Up To 70%</h4>
                <Link to={"/women"}>
                  <button>Shop Now</button></Link>
              </div>
              <img src={img1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiperSlide'>
            <div className="banner1" id="banner2">
              <div className="Bpart1" id="Bpart2">

                <h1>Summer Style <br />
                  Sensations.</h1>
                <h3>70 - 80% Off</h3>
                <Link to={"/women"}>
                  <button>Shop Now</button></Link>
              </div>
              <img src={homebanner} alt="" id="remove" />
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiperSlide'>
            <div className="banner1" id="banner3">
              <div className="Bpart1" id="Bpart3">
                <h1>Summer Style <br />
                  Sensations.</h1>
                <h3>Save Up To 50%</h3>
                <Link to={"/women"}>
                  <button>Shop Now</button></Link>
              </div>
              <img src={homebanner2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiperSlide'>
            <div className="banner1" id="banner4">
              <div className="Bpart1" id="Bpart4">
                <h1>Summer Style <br />
                  Sensations.</h1>
                <h3>Buy 1 Get 1 Free</h3>
                <Link to={"/man"}>
                  <button>Shop Now</button></Link>
              </div>
              <img src={homebanner3} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <!-- brandrow --> */}
      
       
          <div className="brandrow">

            <img src={brand1} alt="" id="brand1" />
            <img src={brand2} alt="" />
            <img src={brand4} alt="" id='chIcon' />
            <img src={brand5} alt="" />
            <img src={brand3} alt="" />

          </div>
         

      <div className="slideSwiper">
        <Swiper className='mainSwiper' 
        navigation={true} pagination={true} 
        autoplay={true}  spaceBetween={0} 
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
         breakpoints={{
          // When window width is <= 768px (mobile)
          350: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
           // When window width is <= 768px (mobile)
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },}}>
          <SwiperSlide className='swiperslide'>
            <div className="BG1">
              <Link to={"/man"}>
                <div className="tittle">
                  <h2>Spring Style</h2>
                  <button>Explore Now</button>
                </div></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="BG2">
              <Link to={"/women"}>
                <div className="tittle">
                  <h2>25% Off Items</h2>
                  <button>Explore Now</button>
                </div></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="BG3">
              <Link to={"/man"}>
                <div className="tittle">
                  <h2>New Arrivals</h2>
                  <button>Explore Now</button>
                </div></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="BG4">
              <Link to={"/man"}>
                <div className="tittle">
                  <h2>New Arrivals</h2>
                  <button>Explore Now</button>
                </div></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="BG5">
              <Link to={"/man"}>
                <div className="tittle">
                  <h2>Spring Style</h2>
                  <button>Explore Now</button>
                </div></Link>
            </div>
          </SwiperSlide>

        </Swiper></div>

      <div className="byCat">

        <h2>Top Catagery</h2>

        <p>Shop by trending Catagery of the season</p>

        <div className="catS">
          <Link to={"/man"}>
            <div className="cat1">
              <h5>Mens Fation's</h5></div>
          </Link>
          <Link to={"/women"}>
            <div className="cat2">
              <h5>Womans Fation</h5></div></Link>

          {/* <Link to={"/women"}>
             <div className="cat3"> 
               <h5>50% Off on<br/>
               Womans special</h5></div> </Link> */}

          <Link to={"/kids"}>
            <div className="cat4">
              <h5>Kid's special</h5></div></Link>
          <Link to={"/man"}>
            <div className="cat5">
              <h5>10% Off on<br />Sport's Material </h5></div></Link>
        </div>
      </div>

      <div className="promies1">
        <div className="pro1">
          <img src={delivery} alt="" />
          <div>
            <h4>Free Delivery </h4>
            <p>On order above $25</p></div>
        </div>
        <div className="pro1" >
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

        <div className="pro1" id="hide">
          <img src={security} alt="" />
          <div>
            <h4>Security Guarantee </h4>
            <p>100% Secured shopping experience</p></div>
        </div>
      </div>

      {/* <!-- Treading product --> */}
      <div className="trend1">
        <h3>Trending product</h3>
        <div className="trendImg1">
          <img src={Tbrand} alt="" />
          <img src={Tbrand2} alt='' />
          <img src={Tbrand3} alt="" />
          <img src={Tbrand4} alt="" />
        </div>
      </div>

      <div className="bySellers">
        <h2 id="sell">Top Collection</h2>
        <p>Top Treading brand collection of the sesons</p>
        <div className="sellers">

          <img src={shirtBrand1} alt="" />
          <img src={manbrand2} alt="" />
          <img src={manbrand3} alt="" />
          <img src={manbrand4} alt="" />
          {/* <!--  Women  --> */}
          <img src={wbrand1} alt="" />
          <img src={wbrand2} alt="" />
          <img src={wbrand3} alt="" />
          <img src={wbrand4} alt="" />
          {/* <!-- Kids --> */}
          <img src={kidbrand1} alt="" />
          <img src={kidbrand2} alt="" />
          <img src={kidbrand3} alt="" />
          <img src={kidbrand4} alt="" />

          {/* <!-- Sport --> */}
          <img src={Sbrand1} alt="" />
          <img src={Sbrand2} alt="" />
          <img src={Sbrand3} alt="" />
          <img src={Sbrand4} alt="" />
        </div>
      </div>
    </>

  )
}
export default Section