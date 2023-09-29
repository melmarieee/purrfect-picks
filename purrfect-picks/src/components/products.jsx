import '../css/products.css'
import Header from './common/header'
import Footer from './common/footer'
import { useState } from 'react'

import dogFood from '../assets/dogFood.png'
import puppyFood from '../assets/puppyFood.png'
import catFood from '../assets/catFood.png'
import kittenFood from '../assets/kittenFood.png'
import dogTreats from '../assets/dogTreats.png'
import catTreats from '../assets/catTreats.png'
import petVits from '../assets/petVits.png'
import prodsHeroImg from '../assets/product-hero-img.png'
import { Pets } from '@mui/icons-material'

let xBtn = document.getElementsByClassName('fa-xmark');

const Products = () => {

  const[showProductHere, previewProduct] = useState('')
  const showDogProd = () => {
    previewProduct(<DogFoodProd/>)
  }
  const showCatProd = () => {
    previewProduct(<CatFoodProd/>)
  }
  const showPuppyProd = () => {
    previewProduct(<PuppyFoodProd/>)
  }
  const showKittenProd = () => {
    previewProduct(<KittenFoodProd/>)
  }
  const showDogTreatsProd = () => {
    previewProduct(<DogTreatsProd/>)
  }
  const showCatTreatsProd = () => {
    previewProduct(<CatTreatsProd/>)
  }
  const showPetVitsProd = () => {
    previewProduct(<showPetVitsProd/>)
  }


    return(
      <div>
        <Header/>
        {showProductHere}
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
                  <div class="view-button" onClick={showDogProd}>View</div>
                </div>

                <div class="product cat-products" data-name="p-2" data-item="cat-products">
                  <img src={catFood} alt=""/>
                  <h6>Purrpicks cat food</h6>
                  <div class="view-button" onClick={showCatProd}>View</div>
                </div>

                <div class="product dog-products" data-name="p-3" data-item="dog-products">
                  <img src={puppyFood} alt=""/>
                  <h6>Purrpicks puppy food</h6>
                  <div class="view-button" onClick={showPuppyProd}>View</div>
                </div>

                <div class="product cat-products" data-name="p-4" data-item="cat-products">
                  <img src={kittenFood} alt=""/>
                  <h6>Purrpicks kitten food</h6>
                  <div class="view-button" onClick={showKittenProd}>View</div>
                </div>

                <div class="product dog-products" data-name="p-5" data-item="dog-products">
                  <img src={dogTreats} alt=""/>
                  <h6>Purrpicks dog treats</h6>
                  <div class="view-button" onClick={showDogTreatsProd}>View</div>
                </div>

                <div class="product cat-products" data-name="p-6" data-item="cat-products">
                  <img src={catTreats} alt=""/>
                  <h6>Purrpicks cat treats</h6>
                  <div class="view-button" onClick={showCatTreatsProd}>View</div>
                </div>

                <div class="product pet-vits" data-name="p-7" data-item="cat-products dog-products">
                  <img src={petVits} alt=""/>
                  <h6>Purrpicks multi-vitamins</h6>
                  <div class="view-button" onClick={showPetVitsProd}>View</div>
                </div>

            </div>

          </div>

          
        </main>
        <Footer/>
      </div>
    )
}

const AllProductsPreview = () => {
  return(
    <>
  <ProductsPreview
  prodImg = {dogFood}
  prodTitle = "Purrpicks Dog Food"
  prodDesc = "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving."/>
  <ProductsPreview
  prodImg = {puppyFood}
  prodTitle = "Purrpicks Dog Food"
  prodDesc = "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving."
  />
  <ProductsPreview
  prodImg = {catFood}
  prodTitle = "Purrpicks Dog Food"
  prodDesc = "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving."
  />
  <ProductsPreview
  prodImg = {kittenFood}
  prodTitle = "Purrpicks Dog Food"
  prodDesc = "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving."
  />
  <ProductsPreview
  prodImg = {dogTreats}
  prodTitle = "Purrpicks Dog Food"
  prodDesc = "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving."
  />
  <ProductsPreview
  prodImg = {catTreats}
  prodTitle = "Purrpicks Dog Food"
  prodDesc = "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving."
  />
  <ProductsPreview
  prodImg = {petVits}
    prodTitle = "Purrpicks Dog Food"
    prodDesc = "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving."
    />
    </>
  )
}

const ProductsPreview = (props) => {
  const[previewProduct, closeProduct] = useState(true);
  
  return(
    <>
    {previewProduct ?<div className='preview-container'>
      <i class="fa-solid fa-xmark" id='xmark' onClick={() => closeProduct(!previewProduct)}></i>
      <div className="product-preview-container">
        <img src={props.prodImg} alt="" />
        <div className="product-preview-contents-container">
          <h5>{props.prodTitle}</h5>
          <p>{props.prodDesc}</p>

          
          <div className="buttons-container">
          <button id='addtoCartButton' name="addToCart">add to cart</button>
            <div className="plus-minus-container">
              <form>
              <input type="number" name="addToCart" id="itemValue" placeholder='1' min={1} max={99} />
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div> : null}
    </>
  )
}


const DogFoodProd = () => {

  return(
    <>
    <ProductsPreview
  prodImg = {dogFood}
  prodTitle = "Purrpicks Dog Food"
  prodDesc = "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving."/>
    </>
  )
}
const CatFoodProd = () => {
  return(
    <>
      <ProductsPreview
  prodImg = {catFood}
  prodTitle = "Purrpicks Dog Food"
  prodDesc = "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving."
  />
    </>
  )
}
const PuppyFoodProd = () => {
  return(
    <>
    <ProductsPreview
  prodImg = {puppyFood}
  prodTitle = "Purrpicks Dog Food"
  prodDesc = "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving."
  />
    </>
  )
}

const KittenFoodProd = () => {
  return(
    <>
  <ProductsPreview
  prodImg = {kittenFood}
  prodTitle = "Purrpicks Dog Food"
  prodDesc = "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving."
  />
    </>
  )
}
const DogTreatsProd = () => {
  return(
    <>
  <ProductsPreview
  prodImg = {dogTreats}
  prodTitle = "Purrpicks Dog Food"
  prodDesc = "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving."
  />
    </>
  )
}
const CatTreatsProd = (props) => {
  return(
    <>
  <ProductsPreview
  prodImg = {catTreats}
  prodTitle = "Purrpicks Dog Food"
  prodDesc = "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving."
  />
    </>
  )
}
const PetVitsProd = (props) => {
  return(
    <>
  <ProductsPreview
  prodImg = {petVits}
    prodTitle = "Purrpicks Dog Food"
    prodDesc = "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving."
    />
    </>
  )
}

export default Products;


