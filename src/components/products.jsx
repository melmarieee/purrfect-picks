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
import accessory1 from '../assets/accessory1.png'
import accessory2 from '../assets/accessory2.png'
import accessory3 from '../assets/accessory3.png'
import accessory4 from '../assets/accessory4.png'
import accessory5 from '../assets/accessory5.png'
import accessory6 from '../assets/accessory6.png'
import accessory7 from '../assets/accessory7.png'
import accessory8 from '../assets/accessory8.png'

import { Button, Modal, ModalHeader, ModalFooter, ModalBody, FormGroup, Label, Col, Input } from 'reactstrap';

let xBtn = document.getElementsByClassName('fa-xmark');

const product_data = [
  {
    img: dogFood,
    title: "Purrpicks Dog Food",
    description: "Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving.",
    price: 299,
    service_type: "product",
  },
  {
    img: puppyFood,
    title: "Purrpicks Puppy Food",
    description: "Introducing our puppy food, the perfect blend of health, balance, and quality. Crafted with care, our organic, hypoallergenic formula ensures your growing pup receives the best nutrition for a strong start in life.",
    price: 229,
    service_type: "product",
  },
  {
    img: catFood,
    title: "Purrpicks Cat Food",
    description: "Elevate your feline friend's well-being with our healthy, well-balanced, organic, hypoallergenic cat food. Crafted with care, it's a purr-fect blend of premium ingredients designed to support your cat's vitality and ensure a happy, allergy-free life.",
    price: 299,
    service_type: "product",
  },
  {
    img: kittenFood,
    title: "Purrpicks Kitten Food",
    description: "Nurture your little furball's growth with our healthy, well-balanced, organic, hypoallergenic kitten food. Meticulously crafted for your young explorer, it's a delectable blend of premium ingredients, ensuring a strong start in life.",
    price: 229,
    service_type: "product",
  },
  {
    img: dogTreats,
    title: "Purrpicks Dog Treats",
    description: "Indulge your furry friend with our healthy, well-balanced, organic, hypoallergenic dog treats. Crafted with care, these mouthwatering rewards are the perfect blend of premium, allergy-friendly ingredients.",
    price: 199,
    service_type: "product",
  },
  {
    img: catTreats,
    title: "Purrpicks Cat Treats",
    description: "Spoil your feline friend with our healthy, well-balanced, organic, hypoallergenic cat treats. Each bite is a delectable blend of premium, allergy-friendly ingredients.",
    price: 199,
    service_type: "product",
  },
  {
    img: petVits,
    title: "Purrpicks Vitamins",
    description: "Elevate your pet's health with our 10-in-1 Pet Multivitamins! Packed with essential nutrients, these easy-to-administer supplements support your furry friend's vitality, immunity, and overall well-being.",
    price: 299,
    service_type: "product",
  },
  {
    img: accessory1,
    title: "Slow Feeder Bowl",
    description: "These bowls help prevent rapid consumption of food, reduce the risk of digestive problems, and promote healthier eating habits in pets.",
    price: 169,
    service_type: "product",
  },
  {
    img: accessory2,
    title: "Fun Feeder Bowl",
    description: "These bowls features intricate patterns or puzzles that challenge pets to work for their food, providing mental stimulation and slowing down their eating pace.",
    price: 219,
    service_type: "product",
  },
  {
    img: accessory3,
    title: "Pet Wipes",
    description: "Pet wipes are moist towelettes specifically formulated for cleaning and refreshing your furry companion. They are convenient for quickly cleaning your pet's paws, fur, or face, and they can help eliminate odors while keeping your pet feeling fresh between baths.",
    price: 99,
    service_type: "product",
  },
  {
    img: accessory4,
    title: "Pet Carrying Bag",
    description: "A portable and comfortable bag designed for safely transporting small pets, allowing you to take your furry friends on the go with ease and convenience. Made of PVC and petsafe materials",
    price: 299,
    service_type: "product",
  },
  {
    img: accessory5,
    title: "Pet Grooming Brush",
    description: " An essential tool for maintaining your pet's coat health and appearance, designed with bristles or teeth that effectively remove loose fur, tangles, and mats, while also stimulating your pet's skin and promoting blood circulation.",
    price: 299,
    service_type: "product",
  },
  {
    img: accessory6,
    title: "Nail Grooming Clipper",
    description: "A precision tool designed for safely and efficiently trimming your pet's nails, helping maintain their paw health and preventing discomfort or injury.",
    price: 299,
    service_type: "product",
  },
  {
    img: accessory7,
    title: "Dog Dental Chews",
    description: "Tasty treats specially formulated to help improve your dog's oral health by reducing plaque, tartar buildup, and promoting fresh breath while providing a delicious snack they'll love.",
    price: 299,
    service_type: "product",
  },
  {
    img: accessory8,
    title: "Cat Dental Chews",
    description: "Flavorful treats designed to enhance your cat's dental hygiene by reducing plaque and tartar buildup while delivering a tasty and enjoyable snack for your feline friend.",
    price: 299,
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
  const [filteredProduct, setFilteredProduct] = useState(product_data);
    
    const toggleModalClose = () => {
      setModal(!modal)
    }

    const toggleModaOpen = (product) => {
      setActiveModalData(product)
      setModal(!modal)
    }

    const searchProduct = (event) => {
      let new_filtered_product = []

      product_data.map(
        (product) => {
          if (product.title.toLowerCase().includes(event.target.value.toLowerCase())) { 
            new_filtered_product.push(product)
          }
        }
      )
      console.log(new_filtered_product)
      setFilteredProduct(new_filtered_product)
    }

    const addToCart = () => {

      const cart_user = window.localStorage.getItem("user");
      if (!cart_user) {
        window.location.href = "/login";
        return
      }
      
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
      <div className='prods pt-5'>
        <div className="hero-prods-container">
            <div className='prods-hero-texts'>
              <h1>Quality Products Create<br/>
                  Healthier & Happier Pets 
              </h1>
              <p>We create healthy, well-balanced, organic<br/> and animal safe products for your furry friends</p>    
            </div>
            <img src={prodsHeroImg} alt="purrfect-picks-hero-img" id='prodHeroImg'/>
          </div>
        <Header/>
      <div>
        <Header count={carts.length}/>
        {alert}
        <Modal isOpen={modal} toggle={toggleModalClose}>
            <ModalHeader toggle={toggleModalClose}>Buy this product</ModalHeader>
            <ModalBody>
              <div >
                <div className='modal-container'>
                  <img class="img-fluid px-5 modal-prod" src={activeModalData ? activeModalData.img : ""} alt="" />
                  <div>
                    <h5 class="pt-3">{activeModalData ? activeModalData.title : ""}</h5>
                    <h5>{activeModalData ? `₱ ${activeModalData.price}` : ""}</h5>
                    <p>{activeModalData ? activeModalData.description : ""}</p>
                    
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
                <Button className="mx-3" color="none" onClick={toggleModalClose}>
                    Cancel
                </Button>
                <button onClick={addToCart.bind(this)} id='addtoCartButton' name="addToCart">Add to cart</button>
            </ModalFooter>
        </Modal>
        <main class="products-section">
          <div class="container">
            <div class="product-filter px-3 pt-3 pb-1 mb-4">
              <FormGroup row>
                <Label for="searchProduct" md={1} id='search-label'>Search:</Label>
                <Col md={11}>
                  <Input id="searchProduct" onChange={searchProduct.bind(this)} type="email" name="email" placeholder="Search product" />
                </Col>
              </FormGroup>
            </div>
            <div class="products-container">
                {
                  filteredProduct.map(
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


