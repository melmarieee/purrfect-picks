import '../css/homepage.css'
import homeHeroFinal2 from '../assets/home-hero-final2.png'
import productsInBox from '../assets/products-in-box.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

const Index = () => {
    return(
      <div>
        <section class="hero-section">

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
                  <a href="subscription.html"><button id="home-hero-button">Subscribe</button></a>
                  <a href="#faqs-navigator" id="explore-button"><button id="home-hero-button2">Explore <i class="fa-solid fa-paw"></i></button></a>
              </div>

            </div>
        </section>

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
              <a href="products.html"><button id="products-button"><i class="fa-solid fa-arrow-left-long"> </i> Products</button></a>
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
                  <p>Answer the pet survey in the “Subscription Page” to be subscribed with us. Purrfect Picks will give a recommended box subscription according to your pet needs. 
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
                  <p>We calculate the pet supplies for your fur friends. The supplies that will be given is thoroughly calculated together with instructions and guides with it.
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

      </div>
    )
}

export default Index;