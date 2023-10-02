import '../css/homepage.css'
import Header from './common/header'
import Footer from './common/footer'
import AlertMessage from './common/alert'

import homeHeroFinal from '../assets/home-hero-final.png'
import homeHeroImg3 from '../assets/home-hero-page3.png'
import homeHeroImg4 from '../assets/home-hero-page4.png'
import productsInBox from '../assets/products-in-box.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import lorraine from '../assets/loraine.png'
import baldonado from '../assets/baldonado.png'
import kuyaKim from '../assets/kuyakim.png'
import piolo from '../assets/piolo.png'

import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';


const Index = () => {
    return(
      <div>
        <Header/>
        <div>
          {/* <section class="hero-section">

            <div class="hero-container">
              <div class="hero-background-img">
                <img src={homeHeroFinal2} alt="purrfect-picks-hero-img" id="home-hero-img"/>
              </div>

              <div class="hero-heading-container">
                <h1 id="hero-heading">
                  Organic Pet Supplies <br/>
                  Makes Healthier  &<br/>
                  Happier Pet Friends
                </h1>
                <p id="hero-text">
                  Make your fur friends the happiest of them all by subscribing<br/>
                  to Purrfect Picks! Show them the best love and join us now!
                </p>
                  <a href="/subscriptions"><button id="home-hero-button">Subscribe</button></a>
                  <a href="#faqs-navigator" id="explore-button"><button id="home-hero-button2">Explore <i class="fa-solid fa-paw"></i></button></a>
              </div>

            </div>
        </section> */}
        </div>
        
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade,Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="/products">
            <button className='home-hero-btn button1'>SHOP NOW</button>
          </a>
          <img src={homeHeroImg3} alt="hero-img1" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="/subscriptions">
            <button className='home-hero-btn button2'>SUBSCRIBE</button>
          </a>
          <a href="#faqs-navigator">
            <button className='home-hero-btn button3'>Explore <i class="fa-solid fa-paw"></i></button>
          </a>
          <img src={homeHeroFinal} alt="hero-img2" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="/signup">
            <button className='home-hero-btn button4'>REGISTER</button>
          </a>
          <img src={homeHeroImg4} alt="hero-img1" />
        </SwiperSlide>
      </Swiper>

        {/* <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href="/products"><button className='home-hero-btn button1'>SHOP NOW!</button></a>
            <img src={homeHeroImg3} class="d-block w-100" alt="purrpicks-hero-img3"/>
          </div>
          <div class="carousel-item">
          <a href="/subscriptions"><button className='home-hero-btn  button2'>SUBSCRIBE</button></a>
          <a href="/subscriptions"><button className='home-hero-btn  button3'>Explore <i class="fa-solid fa-paw"></i></button></a>
            <img src={homeHeroFinal} class="d-block w-100" alt="purrpicks-hero-img1"/>
          </div>
          <div class="carousel-item">
            <a href="/signup"><button className='home-hero-btn  button4'>SIGN UP!</button></a>
            <img src={homeHeroImg4} class="d-block w-100" alt="purrpicks-hero-img4"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        </div> */}

        <section class="products-hero-section">
          <div class="products-hero-container">
            <div class="products-hero-img">
              <img src={productsInBox} alt="purrfect-picks-box" id="products-in-box"/>
            </div>
            <div class="products-hero-headings">
              <h3>Your pets deserve nothing but the best.</h3>
              <p>We've meticulously
                crafted our hypoallergenic, natural, complete, and 
                well-balanced dog and cat food to provide your furry 
                family members with the finest nutrition available.</p>
              <a href="/products"><button id="products-button"><i class="fa-solid fa-arrow-left-long"> </i> Products</button></a>
            </div>

          </div>

          <div id="faqs-navigator"></div>
        </section>

        <section class="faqs-section" id="faqs">
          <h2 id="faqs-header">HOW IT WORKS</h2>

          <div class="faqs-container">
            <div class="faqs-card">
              <div class="face face1">
                <div class="faqs-content">
                  <img src={img1} alt="purrfect-steps"/>
                  <h3>STEP 1</h3>
                </div>
              </div>
          
              <div class="face face2">
                <div class="faqs-content">
                  <p>Register to Purrfect Picks to create an account and start shopping. Choose products or subscribe for monthly box of goodness for your fur friends!
                  </p>
                </div>
              </div>
            </div>
          
            <div class="faqs-card">
              <div class="face face1">
                <div class="faqs-content">
                  <img src={img2} alt="purrfect-steps"/>
                  <h3>STEP 2</h3>
                </div>
              </div>
          
              <div class="face face2">
                <div class="faqs-content">
                  <p>After purchasing, we will immediately ship your package. For your subscriptions, we automatically calculate your pets' needed supply monthly base on their background. 
                  </p>
                </div>
              </div>
            </div>
          
            <div class="faqs-card">
              <div class="face face1">
                <div class="faqs-content">
                  <img src={img3} alt="purrfect-steps"/>
                  <h3>STEP 3</h3>
                </div>
              </div>
          
              <div class="face face2">
                <div class="faqs-content">
                  <p>Once your billing statement has been settled, we will send another package for your fur friend. On the other hand, if you have more pets, you are always free to create another for them!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="testimony-section">
				  <div class="testimony-header-container">
					<h2>Trusted by thousands of<br/>subscribed pet owners in the Philippines</h2>
				  </div>

				  <div class="testimonies-container">

					<div class="review-container">
					  <div class="img-name-star-container">
						<img src={lorraine} alt="revews-img"/>
						<div class="name-star-container">
						  <p>Lorrainne Joy Ostan</p>
						  <div class="star-container">
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
						  </div>
						</div>
					  </div>
					  <div class="review-text">
						<p>“My furry friend eagerly anticipates their monthly surprise, and it's heartwarming to see the joy these boxes bring to their life. Highly recommended! 🐾❤️”</p>
					  </div>
					</div>

					
					<div class="review-container">
					  <div class="img-name-star-container">
						<img src={baldonado} alt="revews-img"/>
						<div class="name-star-container">
						  <p>Frank Michael Baldonado</p>
						  <div class="star-container">
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
						  </div>
						</div>
					  </div>
					  <div class="review-text">
						<p>"Signing up for a pet subscription has been a game-changer. It's not only convenient but ensures my pet receives quality supplies and treats regularly, making both of us happier and healthier"</p>
					  </div>
					</div>

					<div class="review-container">
					  <div class="img-name-star-container">
						<img src={kuyaKim} alt="revews-img"/>
						<div class="name-star-container">
						  <p>Kuya Kim Atienza</p>
						  <div class="star-container">
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
						  </div>
						</div>
					  </div>
					  <div class="review-text">
						<p>"Since subscribing to the pet service, my beloved fur baby has never been happier or healthier. The convenience of receiving top-quality pet essentials at my doorstep has made pet care a breeze”</p>
					  </div>
					</div>
					<div class="review-container">
					  <div class="img-name-star-container">
						<img src={piolo} alt="revews-img"/>
						<div class="name-star-container">
						  <p>Piolo Pascual</p>
						  <div class="star-container">
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
						  </div>
						</div>
					  </div>
					  <div class="review-text">
						<p>"Thanks to our pet subscription, our furry family member is always well taken care of with a constant supply of high-quality products, and it has made our lives as pet parents so much easier and stress-free"</p>
					  </div>
					</div>
				  </div>
				</section>
        <Footer/>
      </div>
    )
}

export default Index;