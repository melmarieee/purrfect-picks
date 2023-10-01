import '../css/subscriptions.css'
import { useState } from 'react'
import Header from './common/header'
import Footer from './common/footer'
import AlertMessage from './common/alert'

import ldBasic from '../assets/ldBasic.png'
import sdBasic from '../assets/sdBasic.png'
import cBasic from '../assets/cBasic.png'
import pBasic from '../assets/pBasic.png'
import kBasic from '../assets/kBasic.png'
import ldPremium from '../assets/ldPremium.png'
import sdPremium from '../assets/sdPremium.png'
import pPremium from '../assets/pPremium.png'
import cPremium from '../assets/cPremium.png'
import kPremium from '../assets/kPremium.png'

import { Button, Modal, ModalHeader, ModalFooter, Alert } from 'reactstrap';

const subscription_data = [
  {
      img: ldBasic,
      title: 'LD BASIC',
      subsType: '(large dogs basic subscription)',
      inclusions: ['Dog Food', 'Dog Treats'],
      description:"All natural, organic, and palatable that surely your dog/s will love. Supplies are adequate for larger dog breeds.",
      recomendation:"Recommended for dogs between 10-50 Kilograms",
      price: 699,
      type: "basic",
      pet_type: "lg_dog",
      service_type: "subscription"
  },
  {
      img: sdBasic,
      title:'SD BASIC',
      subsType:'(small dogs basic subscription)',
      inclusions: ['Dog Food', 'Dog Treats'],
      description:"All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds.", 
      recomendation:"Recommended for dogs under 10 Kilograms",
      price: 499,
      type: "basic",
      pet_type: "sm_dog",
      service_type: "subscription"
  },
  {
      img: ldPremium,
      title: 'LD PREMIUM',
      subsType: '(large dogs premium subscription)',
      inclusions: ['Dog Food', 'Dog Treats', 'Pet Multivitamins'],
      description: "All natural, organic, healthy, and palatable that surely your dog/s will love. Supplies are adequate for larger dog breeds.",
      recomendation:" Recommended for dogs between 10-50 Kilograms",
      price: 999,
      type: "premium",
      pet_type: "lg_dog",
      service_type: "subscription"
  },
  {
      img: sdPremium,
      title:'SD PREMIUM',
      subsType: '(small dogs premium subscription)',
      inclusions: ['Dog Food', 'Dog Treats'],
      description: "All natural, organic, healthy and palatable that surely your dog/s will love. Supplies are only adequate for smaller dog breeds.",
      recomendation: "Recommended for dogs under 10 Kilograms",
      price: 599,
      type: "premium",
      pet_type: "sm_dog",
      service_type: "subscription"
  },
  {
      img: cBasic,
      title: 'C BASIC',
      subsType: '(cats basic subscription)',
      inclusions: ['Cat Food', 'Cat Treats'],
      description: "An all natural, organic, and well balanced supply that surely your cats will love. Supplies are adequately enough for any sizes of cats.",
      recomendation: "Recommended for cats of any sizes",
      price: 499,
      type: "basic",
      pet_type: "cats",
      service_type: "subscription"
  },
  {
      img: cPremium, 
      title:'C PREMIUM',
      subsType: '(cats premium subscription)',
      inclusions: ['Cat Food', 'Cat Treats', 'Pet Multivitamins'],
      description: "A Healthy, organic, all natural, and well-balanced supply that surely your cats will love. Supplies are adequately enough for any sizes of cats.",
      recomendation: "Recommended for cats of any sizes",
      price: 599,
      type: "premium",
      pet_type: "cats",
      service_type: "subscription"
  },
  {
      img: pBasic, 
      title: 'P BASIC',
      subsType: '(puppies basic subscription)',
      inclusions: ['Puppy Food', 'Dog Treats'],
      description: "All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds.",
      recomendation: "Recommended for dogs under 10 Kilograms",
      price: 499,
      type: "basic",
      pet_type: "puppy",
      service_type: "subscription"
  },
  {
      img: pPremium,
      title: 'P PREMIUM' ,
      subsType: '(puppies premium subscription)',
      inclusions: ['Puppy Food', 'Dog Treats'],
      inclution3: 'Pet Multivitamins',
      description: "All natural, organic, healthy, and palatable that surely your puppy/s will love. Supplies are only adequate for puppies.",
      recomendation: "Recommended for puppies between 1-6 Months old",
      price: 599,
      type: "premium",
      pet_type: "puppy",
      service_type: "subscription"
  },
  {
      img: kBasic, 
      title:'K BASIC',
      subsType: '(kittens basic subscription)',
      inclusions: ['Cat Food', 'Cat Treats'],
      description: "An all natural, organic, and well balanced supply that surely your kittens will love. Supplies are adequately enough for any sizes of kittens.", 
      recomendation: "Recommended for kittens of any sizes",
      price: 499,
      type: "basic",
      pet_type: "kittens",
      service_type: "subscription"
  },
  {
    img: kPremium,
    title:'K PREMIUM',
    subsType: '(kittens premium subscription)',
    inclusions: ['Kitten Food', 'Cat Treats', 'Pet Multivitamins'],
    description: "A Healthy, organic, all natural, and well-balanced supply that surely your kittens will love. Supplies are adequately enough for any sizes of kittens.",
    recomendation: "Recommended for kittens of any sizes",
    price: 599,
    type: "premium",
    pet_type: "kittens",
    service_type: "subscription"
  }
]

let bgColor = document.getElementsByClassName('filter-btn');

const Subscriptions = (props) => {

const [allSubscriptions, changeFilter] = useState(subscription_data)
const [activeSubscribe, changeActiveSubscribe] = useState(null)
const [activePet, changeactivePet] = useState("none")
const [activePetMessage, changeactivePetMessage] = useState(null)
const [modal, setModal] = useState(false);
const [alert, setAlert] = useState(null);

const cart_session = window.localStorage.getItem("cart");
const parsed_cart = JSON.parse(cart_session)
const [carts, setCarts] = useState(parsed_cart ? parsed_cart : []);

const toggleModalClose = () => {
  setModal(!modal)
}

const toggleModalOpen = (subscription) => {
  if (activePet == "none") {
    setAlert(
      <AlertMessage color="danger" name="Please select yout pet" open={true}/>
    )
    setTimeout(function() { 
      setAlert(null)
    }, 2000);

    changeactivePetMessage(
      <span class="text-danger px-3">Please select your pet to subscribe</span>
    )
    return;
  }
  else {
    changeactivePetMessage(
      ""
    )
  }
  subscription["name"] = activePet
  changeActiveSubscribe(subscription)
  setModal(!modal)
}

const subscribe_pet = () => {
  setAlert(
    <AlertMessage color="success" name={"Successfully added to cart" + activeSubscribe.title + " for: " + activeSubscribe.name} open={true}/>
  )
  setTimeout(function() { 
    setAlert(null)
  }, 2000);
  setModal(!modal)

  if (carts) {
    let new_cart = carts;
    new_cart.push(activeSubscribe)

    window.localStorage.setItem("cart", JSON.stringify(new_cart));
    setCarts(new_cart)

    return;
  }

  window.localStorage.setItem("cart", JSON.stringify([activeSubscribe]));
  setCarts([activeSubscribe])
}


const choosePet = (event) => {
  changeactivePet(event.target.value)
}


const filter_type = (type) => {
  change_color_filter(type)
  if (type == "all") {
    changeFilter(subscription_data)
    return;
  }
  changeFilter(subscription_data.filter((subscription) => subscription.type == type))
}

const filter_pet_type = (pet_type) => {
  change_color_filter(pet_type)
  changeFilter(subscription_data.filter((subscription) => subscription.pet_type == pet_type))
}

const change_color_filter = (filter) => {
  switch(filter) {
    case "all":
        for (var i = 0; i < bgColor.length; i++) {
          bgColor[0].classList.add('active-button')
          bgColor[i].classList.remove('active-button')
          bgColor[i].classList.remove('active-btn')
        }
      break;
    case "basic":
      for (var i = 0; i < bgColor.length; i++) {
        bgColor[1].classList.add('active-button')
        bgColor[i].classList.remove('active-button')
        bgColor[i].classList.remove('active-btn')
      }
      break;
    case "premium":
      for (var i = 0; i < bgColor.length; i++) {
        bgColor[2].classList.add('active-button')
        bgColor[i].classList.remove('active-button')
        bgColor[i].classList.remove('active-btn')
      }
      break;
    case "lg_dog":
      for (var i = 0; i < bgColor.length; i++) {
        bgColor[3].classList.add('active-button')
        bgColor[i].classList.remove('active-button')
        bgColor[i].classList.remove('active-btn')
      }
      break;
    case "sm_dog":
      for (var i = 0; i < bgColor.length; i++) {
        bgColor[4].classList.add('active-button')
        bgColor[i].classList.remove('active-button')
        bgColor[i].classList.remove('active-btn')
      }
      break;
    case "puppy":
      for (var i = 0; i < bgColor.length; i++) {
        bgColor[5].classList.add('active-button')
        bgColor[i].classList.remove('active-button')
        bgColor[i].classList.remove('active-btn')
      }
      break;
    case "cats":
      for (var i = 0; i < bgColor.length; i++) {
        bgColor[6].classList.add('active-button')
        bgColor[i].classList.remove('active-button')
        bgColor[i].classList.remove('active-btn')
      }
    case "kittens":
      for (var i = 0; i < bgColor.length; i++) {
        bgColor[7].classList.add('active-button')
        bgColor[i].classList.remove('active-button')
        bgColor[i].classList.remove('active-btn')
      }
      break;
    default:
      for (var i = 0; i < bgColor.length; i++) {
        bgColor[0].classList.add('active-button')
        bgColor[i].classList.remove('active-button')
        bgColor[i].classList.remove('active-btn')
      }
  }
}
  return(
    <>
    <Header count={carts.length}/>
      {alert}
      <main className='subscription-section'>
      <Modal isOpen={modal} toggle={toggleModalClose}>
          <ModalHeader toggle={toggleModalClose}>Do you want add to cart: {activeSubscribe ? activeSubscribe.title + ` For ${activeSubscribe.name}`  : ""}</ModalHeader>
          <ModalFooter>
                  <Button className="mx-3" color="secondary" onClick={toggleModalClose}>
                      Cancel
                  </Button>
                  <Button onClick={subscribe_pet.bind(this)} color="success">
                      Yes
                  </Button>
          </ModalFooter>
      </Modal>
      <h1 class='subs-header'>SUBSCRIPTIONS</h1>
        <div class="filters-container">
          <div class="choose-pet-container">
            <form action="/action_page.php">
              <label for="pet-name">For:</label>
                <select onChange={choosePet.bind(this)} name="pet-name" id="pet-name">
                  <option value="none">Choose Pet</option>
                  <option value="Rio">Rio</option>
                  <option value="Stella">Stella</option>
                  <option value="Miyo">Miyo</option>
                </select>
                {
                  activePetMessage
                }
            </form>
          </div>
            <div class="subs-filter">
              <ol>
                <li class='filter-btn active-button' onClick={filter_type.bind(this, "all")}>All</li>
                <li class='filter-btn' onClick={filter_type.bind(this, "basic")}>Basic</li>
                <li class='filter-btn' onClick={filter_type.bind(this, "premium")}>Premium</li>
                <li class='filter-btn' onClick={filter_pet_type.bind(this, "lg_dog")}>Large Dogs</li>
                <li class='filter-btn' onClick={filter_pet_type.bind(this, "sm_dog")}>Small Dogs</li>
                <li class='filter-btn' onClick={filter_pet_type.bind(this, "puppy")}>Puppies</li>
                <li class='filter-btn' onClick={filter_pet_type.bind(this, "cats")}>Cats</li>
                <li class='filter-btn' onClick={filter_pet_type.bind(this, "kittens")}>Kittens</li>
              </ol>
            </div>
          </div> 
        <div className="subs-box-container">

        {
          allSubscriptions.map(
            (subscription, _) => 
            <div className='SubsBox'>
              <div className='subs-first-row'>
                <img src={subscription.img}/>
                <div className='subs-details'>
                  <p>
                    <strong>{[subscription.title]} </strong>{subscription.subsType}
                  </p>
                  {
                    subscription.type == "basic" ? 
                      <span class="badge rounded-pill bg-secondary p-2 my-2 badge_width">Basic</span>
                      :
                      <span class="badge rounded-pill bg-warning p-2 my-2 badge_width">Premium</span>
                  }
                  Inclusions
                  <ul>
                    {
                      subscription.inclusions.map(
                        (inclusion, _) => 
                        <li>{inclusion}</li>
                      )
                    }
                  </ul>
                  <p>{subscription.description}</p>
                  <strong><p>{subscription.recomendation}</p></strong>
                </div>
              </div>
              <div  className='subs-second-row'>
                <h5>₱{subscription.price} / Monthly </h5>
                <button onClick={toggleModalOpen.bind(this, subscription)}>Add to cart</button>
              </div>
            </div>
          )
        }
        </div>
     </main>
     <Footer/>
    </>
    );
};

export default Subscriptions;