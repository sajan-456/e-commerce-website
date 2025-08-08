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
import homebanner from '../assets/home/homeBanner.png'
import homebanner2 from '../assets/home/homeBanner3.png'
import homebanner3 from '../assets/home/homeBanner4.png'
import { datas } from '../pages/ShopBy'
import { Link } from "react-router-dom"
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Section.css'
import { useEffect, useState } from 'react'
function Section() {

  const [data, setData] = useState([])
  useEffect((e) => {
    setData(datas)
  }, [])


  const newData = datas.filter((e, i) => (i % 2 === 0))
  const newData2 = datas.filter((e, i) => (i % 2 === 1))


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
          autoplay={false} spaceBetween={0}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          breakpoints={{
            // When window width is <= 768px (mobile)
            330: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            // When window width is <= 768px (mobile)
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
              autoplay: true,
            },
          }}>
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
        <div className="topCatagoryHeading">
          <h2>Top Catagery</h2>
          <p>Shop by trending Catagery of the season</p>
        </div>

        <div className="catS">
          <Swiper
            navigation={true} pagination={false}
            autoplay={false}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={5}
            breakpoints={{
              // When window width is <= 768px (mobile)
              330: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
               400: {
                slidesPerView: 3.3,
                spaceBetween: 0,
              },
              460: {
                slidesPerView: 3.4,
              },
              // When window width is <= 768px (mobile)
              768: {
                slidesPerView: 3.2,
                spaceBetween: 5,
              },
               800: {
                slidesPerView: 3.4,
                spaceBetween: 5,
              },
              1068: {
                slidesPerView: 4.2,
                spaceBetween: 4,
              },
              1188: {
                slidesPerView: 5,
                spaceBetween: 4,
              },
            }}
          >
            <SwiperSlide>
              <Link to={"/man"}>
                <div className="cat1">
                  <div className="catTittle">
                    <h3>Under Rs.499</h3>
                    <del>Rs.1200</del>
                    <b> 499</b>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to={"/women"}>
                <div className="cat2">
                  <div className="catTittle">
                    <h3>Under Rs.799</h3>
                    <del>Rs.2500</del>
                    <b> 799</b>
                  </div>
                </div></Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to={"/kids"}>
                <div className="cat4">
                  <div className="catTittle">
                    <h3>Under Rs.499</h3>
                    <del>Rs.1500</del>
                    <b> 499</b>
                  </div>
                </div></Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to={"/man"}>
                <div className="cat5">
                  <div className="catTittle">
                    <h3>Under Rs.499</h3>
                    <del>Rs.1500</del>
                    <b> 499</b></div>
                </div></Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/man"}>
                <div className="cat3">
                  <div className="catTittle">
                    <h3>Under Rs.399</h3>
                    <del>Rs.1200</del>
                    <b> 399</b></div>
                </div></Link>
            </SwiperSlide>
          </Swiper>


        </div>
      </div>

      <div className="promies1">
        <div className="pro01">
          <img src={delivery} alt="" />
          <div>
            <h4>Free Delivery </h4>
            <p>On order above $25</p></div>
        </div>
        <div className="pro01" >
          <img src={returni} alt="" />
          <div>
            <h4>Easy Returns </h4>
            <p>7 Day free return</p></div>
        </div>
        <div className="pro01">
          <img src={Qicon} alt="" />
          <div>
            <h4>High Quality </h4>
            <p>Primium quality products</p></div>
        </div>

        <div className="pro01" id="hide">
          <img src={security} alt="" />
          <div>
            <h4>100% Secured </h4>
            <p>100% Secured shopping experience</p></div>
        </div>
      </div>

      {/* <!-- Treading product --> */}
      <div className="trend1">
        <h3>Trending product</h3>
        <div className="trend01">
          <Swiper
            navigation={true} pagination={false}
            autoplay={true}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={5}
            breakpoints={{
              // When window width is <= 768px (mobile)
              330: {
                slidesPerView: 2.6,
                spaceBetween: 5,
              },
              460: {
                slidesPerView: 3.2,
              },
              // When window width is <= 768px (mobile)
              768: {
                slidesPerView: 3.4,
                spaceBetween: 5,
                
              },
              990: {
                slidesPerView: 4,
                spaceBetween: 5,

              },
              1198: {
                slidesPerView: 4.4,
                spaceBetween: 4,
              },
              1298: {
                slidesPerView: 5,
                spaceBetween: 4,
                autoplay: true,
                
                
              },
            }}
          >
            {
              data && data.map((e) => {
                return (
                  <SwiperSlide>
                    <Link to={'/manProduct'}>
                    <div className="trendImg1">
                      <img key={e.id} src={e.image} />
                      <button id='TButton'>Shop Now</button>
                    </div></Link>
                  </SwiperSlide>
                  //   <div className='imgDiv'>
                  // 
                  //  </div>
                )

              })

            }

          </Swiper>
        </div>
      </div>

      <div className="bySellers">
        <div className="div">
          <h2 id="sell">Top Collection</h2>
          <p>Top Treading brand collection of the sesons</p>
        </div>

        <div className="sellers">
          <Swiper className='mainSell'
            navigation={true} pagination={false}
            autoplay={true}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={5}
            breakpoints={{
              330: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
              430: {
                slidesPerView: 3.3,
              },
              500: {
                slidesPerView: 3.6,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
              950: {
                slidesPerView: 4.2,
                spaceBetween: 5,
              },
              1180: {
                slidesPerView: 5,
                spaceBetween: 4,
              },
              1288: {
                slidesPerView: 6,
                spaceBetween: 4,
              },
            }}>
            {
              newData && newData.map((e) => {
                return (

                  <SwiperSlide>
                    <Link to={'/manProduct'}>
                    <div className='imgDiv'>
                      <img key={e.id} src={e.image} />
                      <h3>{e.off}% off</h3>
                      <p>Shop Now</p>
                    </div></Link>
                  </SwiperSlide>
                )

              })

            }
          </Swiper>
          <Swiper
            navigation={true} pagination={false}
            autoplay={true}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={5}
            breakpoints={{
              330: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
              430: {
                slidesPerView: 3,
              },
              500: {
                slidesPerView: 3.6,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
              950: {
                slidesPerView: 4.2,
                spaceBetween: 5,
              },
              1180: {
                slidesPerView: 5,
                spaceBetween: 4,
              },
              1288: {
                slidesPerView: 6,
                spaceBetween: 4,
              },
            }}>
            {
              newData2 && newData2.map((e) => {
                return (

                  <SwiperSlide>
                    <Link to={'/manProduct'}>
                    <div className='imgDiv'>
                      <img key={e.id} src={e.image} />
                      <h3>{e.off}% off</h3>
                      <p>Shop Now</p>
                    </div></Link>
                  </SwiperSlide>
                )

              })

            }
          </Swiper>
        </div>
      </div>
    </>

  )
}
export default Section