import '../css/products.css'
import Header from './common/header'
import Footer from './common/footer'

import dogFood from '../assets/dogFood.png'
import puppyFood from '../assets/puppyFood.png'
import catFood from '../assets/catFood.png'
import kittenFood from '../assets/kittenFood.png'
import dogTreats from '../assets/dogTreats.png'
import catTreats from '../assets/catTreats.png'
import petVits from '../assets/petVits.png'
import prodsHeroImg from '../assets/product-hero-img.png'

const Products = () => {

  // let previewContainer = document.querySelector('.products-preview');
  // let previewBox = previewContainer.querySelectorAll('.preview');
  
  // document.querySelectorAll('.products-container .product').forEach(product =>{
  //   product.onclick = () =>{
  //     previewContainer.style.display = 'flex';
  //     let name = product.getAttribute('data-name');
  //     previewBox.forEach(preview =>{
  //       let target = preview.getAttribute('data-target');
  //       if(name == target){
  //         preview.classList.add('active');
  //       }
  //     });
  //   };
  // });
  
  // previewBox.forEach(close =>{
  //   close.querySelector('.fa-times').onclick = () =>{
  //     close.classList.remove('active');
  //     previewContainer.style.display = 'none';
  //   };
  // });

    return(


      <div>
        <Header/>
        <main class="products-section">

          <div className="hero-prods-container">
            <div className='prods-hero-texts'>
              <h1>Quality Products Create<br/>
                  Healthier & Happier Pets 
              </h1>
              <p>We create healthy, well-balanced, organic<br/> and hypo-allergenic products for your furry friend</p>    
            </div>
            <img src={prodsHeroImg} alt="purrfect-picks-hero-img" id='prodHeroImg'/>
          </div>

          <div class="container">

            <div class="products-container">

                <div class="product dog-products" data-name="p-1" data-item="dog-products">
                  <img src={dogFood} alt=""/>
                  <h6>Purrpicks dog food</h6>
                  <div class="view-button">View</div>
                </div>

                <div class="product cat-products" data-name="p-2" data-item="cat-products">
                  <img src={catFood} alt=""/>
                  <h6>Purrpicks cat food</h6>
                  <div class="view-button">View</div>
                </div>

                <div class="product dog-products" data-name="p-3" data-item="dog-products">
                  <img src={puppyFood} alt=""/>
                  <h6>Purrpicks puppy food</h6>
                  <div class="view-button">View</div>
                </div>

                <div class="product cat-products" data-name="p-4" data-item="cat-products">
                  <img src={kittenFood} alt=""/>
                  <h6>Purrpicks kitten food</h6>
                  <div class="view-button">View</div>
                </div>

                <div class="product dog-products" data-name="p-5" data-item="dog-products">
                  <img src={dogTreats} alt=""/>
                  <h6>Purrpicks dog treats</h6>
                  <div class="view-button">View</div>
                </div>

                <div class="product cat-products" data-name="p-6" data-item="cat-products">
                  <img src={catTreats} alt=""/>
                  <h6>Purrpicks cat treats</h6>
                  <div class="view-button">View</div>
                </div>

                <div class="product pet-vits" data-name="p-7" data-item="cat-products dog-products">
                  <img src={petVits} alt=""/>
                  <h6>Purrpicks multi-vitamins</h6>
                  <div class="view-button">View</div>
                </div>

            </div>

          </div>

          <div class="products-preview">

            <div class="preview" data-target="p-1">
                <i class="fas fa-times"></i>
                <img src={dogFood} alt=""/>
                <h3>Purrpicks dog food</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <span>( 213 )</span>
                </div>
                <p>Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving. Say goodbye to allergies and hello to a happier, healthier dog!</p>
                <div class="price">₱399.00</div>
                <div class="buttons">
                  <a href="#" class="cart">add to subscription box</a>
                </div>
            </div>

            <div class="preview" data-target="p-2">
                <i class="fas fa-times"></i>
                <img src={catFood} alt=""/>
                <h3>Purrpicks cat food</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <span>( 168 )</span>
                </div>
                <p>Elevate your feline friend's well-being with our healthy, well-balanced, organic, hypoallergenic cat food. Crafted with care, it's a purr-fect blend of premium ingredients designed to support your cat's vitality and ensure a happy, allergy-free life. Give your cat the nutrition they deserve!</p>
                <div class="price">₱399.00</div>
                <div class="buttons">
                  <a href="#" class="cart">add to subscription box</a>
                </div>
            </div>

            <div class="preview" data-target="p-3">
                <i class="fas fa-times"></i>
                <img src={puppyFood} alt=""/>
                <h3>Purrpicks puppy food</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <span>( 421 )</span>
                </div>
                <p>Introducing our puppy food, the perfect blend of health, balance, and quality. Crafted with care, our organic, hypoallergenic formula ensures your growing pup receives the best nutrition for a strong start in life. Nourish your furry friend with love and pure goodness.</p>
                <div class="price">₱399.00</div>
                <div class="buttons">
                  <a href="#" class="cart">add to subscription box</a>
                </div>
            </div>

            <div class="preview" data-target="p-4">
                <i class="fas fa-times"></i>
                <img src={kittenFood} alt=""/>
                <h3>Purrpicks kitten food</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <span>( 112 )</span>
                </div>
                <p>Nurture your little furball's growth with our healthy, well-balanced, organic, hypoallergenic kitten food. Meticulously crafted for your young explorer, it's a delectable blend of premium ingredients, ensuring a strong start in life. Give your kitten the best, naturally!</p>
                <div class="price">₱399.00</div>
                <div class="buttons">
                  <a href="#" class="cart">add to subscription box</a>
                </div>
            </div>

            <div class="preview" data-target="p-5">
                <i class="fas fa-times"></i>
                <img src={dogTreats} alt=""/>
                <h3>Purrpicks dog treats</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <span>( 516 )</span>
                </div>
                <p>Indulge your furry friend with our healthy, well-balanced, organic, hypoallergenic dog treats. Crafted with care, these mouthwatering rewards are the perfect blend of premium, allergy-friendly ingredients. Treat your dog to goodness, one bite at a time!</p>
                <div class="price">₱499.00</div>
                <div class="buttons">
                  <a href="#" class="cart">add to subscription box</a>
                </div>
            </div>

            <div class="preview" data-target="p-6">
                <i class="fas fa-times"></i>
                <img src={catTreats} alt=""/>
                <h3>Purrpicks cat treats</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <span>( 246 )</span>
                </div>
                <p>Spoil your feline friend with our healthy, well-balanced, organic, hypoallergenic cat treats. Each bite is a delectable blend of premium, allergy-friendly ingredients. Treat your cat to pure goodness, whisker-licking satisfaction guaranteed!</p>
                <div class="price">₱499.00</div>
                <div class="buttons">
                  <a href="#" class="cart">add to subscription box</a>
                </div>
            </div>

            <div class="preview" data-target="p-7">
                <i class="fas fa-times"></i>
                <img src={petVits} alt=""/>
                <h3>Purrpicks pet multi-itamins</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <span>( 86 )</span>
                </div>
                <p>Elevate your pet's health with our 10-in-1 Pet Multivitamins! Packed with essential nutrients, these easy-to-administer supplements support your furry friend's vitality, immunity, and overall well-being. One tiny tablet, a world of benefits for your beloved pet!</p>
                <div class="price">₱599.00</div>
                <div class="buttons">
                  <a href="#" class="cart">add to subscription box</a>
                </div>
            </div>

          </div>
        </main>
        <Footer/>
      </div>
    )
}

export default Products;


