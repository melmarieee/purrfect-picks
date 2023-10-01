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

import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';

let xBtn = document.getElementsByClassName('fa-xmark');

const product_data = [
  {
    img: dogFood,
    title: "Purrpicks Dog Food",
    description: "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving.",
    price: 399,
    service_type: "product",
  },
  {
    img: puppyFood,
    title: "Purrpicks Puppy Food",
    description: "Introducing our puppy food, the perfect blend of health, balance, and quality. Crafted with care, our organic, hypoallergenic formula ensures your growing pup receives the best nutrition for a strong start in life.",
    price: 329,
    service_type: "product",
  },
  {
    img: catFood,
    title: "Purrpicks Cat Food",
    description: "Elevate your feline friend's well-being with our healthy, well-balanced, organic, hypoallergenic cat food. Crafted with care, it's a purr-fect blend of premium ingredients designed to support your cat's vitality and ensure a happy, allergy-free life.",
    price: 399,
    service_type: "product",
  },
  {
    img: kittenFood,
    title: "Purrpicks Kitten Food",
    description: "Nurture your little furball's growth with our healthy, well-balanced, organic, hypoallergenic kitten food. Meticulously crafted for your young explorer, it's a delectable blend of premium ingredients, ensuring a strong start in life.",
    price: 329,
    service_type: "product",
  },
  {
    img: dogTreats,
    title: "Purrpicks Dog Treats",
    description: "Indulge your furry friend with our healthy, well-balanced, organic, hypoallergenic dog treats. Crafted with care, these mouthwatering rewards are the perfect blend of premium, allergy-friendly ingredients.",
    price: 299,
    service_type: "product",
  },
  {
    img: catTreats,
    title: "Purrpicks Cat Treats",
    description: "Spoil your feline friend with our healthy, well-balanced, organic, hypoallergenic cat treats. Each bite is a delectable blend of premium, allergy-friendly ingredients.",
    price: 299,
    service_type: "product",
  },
  {
    img: petVits,
    title: "Purrpicks Vitamins",
    description: "Elevate your pet's health with our 10-in-1 Pet Multivitamins! Packed with essential nutrients, these easy-to-administer supplements support your furry friend's vitality, immunity, and overall well-being.",
    price: 299,
    service_type: "product",
  }
]

const Products = () => {
  const [modal, setModal] = useState(false);
  const [activeModalData, setActiveModalData] = useState(null);
    
    const toggleModalClose = () => {
      setModal(!modal)
    }

    const toggleModaOpen = (product) => {
      setActiveModalData(product)
      setModal(!modal)
    }

    return(
      <div className='prods'>
        <Header/>
        <Modal isOpen={modal} toggle={toggleModalClose}>
            <ModalHeader toggle={toggleModalClose} style={{fontSize: '12px'}}><span style={{fontSize: '18px'}}>Buy this product</span></ModalHeader>
            <ModalBody>
              <div >
                {/* <i class="fa-solid fa-xmark" id='xmark' onClick={() => closeProduct(!previewProduct)}></i> */}
                <div className='product-modal-container'>
                  <img class="img-fluid " src={activeModalData ? activeModalData.img : ""} alt="" />
                  <div>
                    <h4 class="pt-4">{activeModalData ? activeModalData.title : ""}</h4>
                    <h4>{activeModalData ? `₱ ${activeModalData.price}` : ""}</h4>
                    <p>{activeModalData ? activeModalData.description : ""}</p>
                    
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
                <Button className="mx-3" color="secondary" onClick={toggleModalClose}>
                    Cancel
                </Button>
                <button id='addtoCartButton' name="addToCart">add to cart</button>

            </ModalFooter>
        </Modal>
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
                {
                  product_data.map(
                    (product, _) => 
                      <div class="product dog-products" data-name="p-1" data-item="dog-products">
                        <img src={product.img} alt=""/>
                        <h6>{product.title}</h6>
                        <h6>₱ {product.price}</h6>
                        <div onClick={toggleModaOpen.bind(this, product)} class="view-button">View</div>
                      </div>
                  )
                }
            </div>
          </div>
        </main>
        <Footer/>
      </div>
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


