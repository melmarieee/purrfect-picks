import '../css/about-us.css'
import partner1 from '../assets/partner1-img.png'
import partner2 from '../assets/partner2-img.png'


const AboutUs = () => {
    return(
      <div>

        <main class="about-us-section">
          <h1>ABOUT</h1>
          <div class="about-us-description-container">
            <p>Embark on a monthly journey of tail-wagging excitement with our pet supply subscription service. At Purrfect Picks, we understand that pets aren't just animals; they're cherished family members. That's why we've crafted a unique experience where every month, you and your furry friend will receive a carefully curated box of premium pet products, tailored to their specific needs and preferences. Welcome to a world where pet care becomes an adventure. Welcome to Purrfect Picks!</p>
          </div>

          <h1>Purrfect Picks Partners</h1><br/>
          <div class="partners-wrapper">
            <div class="partners-container">
              <img src={partner1} alt="purrfect-partners"/>
              <h3>Peter John Reyes</h3>
              <p>As a lifelong pet lover, my heart has always belonged to the animal kingdom. From the joy of my first puppy's wet nose, my life has been enriched by the unconditional love and companionship of these wonderful creatures.</p>
            </div>

            <div class="partners-container">
              <img src={partner2} alt="purrfect-partners"/>
              <h3>Mel Marie Luya</h3>
              <p>Growing up surrounded by a menagerie of animals, my childhood was a symphony of barks, meows, and chirps that nurtured a deep and abiding love for pets. Today, as a passionate pet lover, I am dedicated to ensuring that all animals receive the care, respect, and love they deserve.</p>
            </div>
          </div>
            
        </main>

      </div>
    )
}

export default AboutUs;