import '../css/products.css'
import Header from './common/header'
import Footer from './common/footer'
import AlertMessage from './common/alert'

import { useState } from 'react'

import dogFood from '../assets/dogFood.png'
import puppyFood from '../assets/puppyFood.png'
import catFood from '../assets/catFood.png'
import kittenFood from '../assets/kittenFood.png'
import dogTreats from '../assets/dogTreats.png'
import catTreats from '../assets/catTreats.png'
import petVits from '../assets/petVits.png'
import prodsHeroImg from '../assets/product-hero-img.png'

import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';

let xBtn = document.getElementsByClassName('fa-xmark');

const product_data = [
  {
    img: dogFood,
    title: "Purrpicks Dog Food",
    description: "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving.",
    price: 699,
    service_type: "product",
  },
  {
    img: puppyFood,
    title: "Purrpicks Dog Food",
    description: "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving.",
    price: 199,
    service_type: "product",
  },
  {
    img: catFood,
    title: "Purrpicks Dog Food",
    description: "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving.",
    price: 429,
    service_type: "product",
  },
  {
    img: kittenFood,
    title: "Purrpicks Dog Food",
    description: "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving.",
    price: 619,
    service_type: "product",
  },
  {
    img: dogTreats,
    title: "Purrpicks Dog Food",
    description: "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving.",
    price: 1699,
    service_type: "product",
  },
  {
    img: catTreats,
    title: "Purrpicks Dog Food",
    description: "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving.",
    price: 3699,
    service_type: "product",
  },
  {
    img: petVits,
    title: "Purrpicks Vitamins",
    description: "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving.",
    price: 2699,
    service_type: "product",
  }
]

const Products = (props) => {
  const cart_session = window.localStorage.getItem("cart");
  const parsed_cart = JSON.parse(cart_session)
  const [carts, setCarts] = useState(parsed_cart ? parsed_cart : []);
  const [modal, setModal] = useState(false);
  const [activeModalData, setActiveModalData] = useState(null);
  const [alert, setAlert] = useState(null);
    
    const toggleModalClose = () => {
      setModal(!modal)
    }

    const toggleModaOpen = (product) => {
      setActiveModalData(product)
      setModal(!modal)
    }

    const addToCart = () => {
      
      setModal(!modal)
      setAlert(
        <AlertMessage color="success" name={"Successfully added to cart" + activeModalData.title} open={true}/>
      )
      setTimeout(function() { 
        setAlert(null)
      }, 2000);

      if (carts) {
        let parsed_product = carts;
        parsed_product.push(activeModalData)
        window.localStorage.setItem("cart", JSON.stringify(parsed_product));
        setCarts(parsed_product)
        return;
      }

      window.localStorage.setItem("cart", JSON.stringify([activeModalData]));
      setCarts([activeModalData])
    }

    return(
      <div className='prods'>
        <Header/>
      <div>
        <Header count={carts.length}/>
        {alert}
        <Modal isOpen={modal} toggle={toggleModalClose}>
            <ModalHeader toggle={toggleModalClose}>Buy this product</ModalHeader>
            <ModalBody>
              <div >
                {/* <i class="fa-solid fa-xmark" id='xmark' onClick={() => closeProduct(!previewProduct)}></i> */}
                <div>
                  <img class="img-fluid px-5" src={activeModalData ? activeModalData.img : ""} alt="" />
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
                <button onClick={addToCart.bind(this)} id='addtoCartButton' name="addToCart">Add to cart</button>

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
        </div>
        <Footer/>
      </div>
    )
}

export default Products;


