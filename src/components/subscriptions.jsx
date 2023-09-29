import '../css/subscriptions.css'
import { useState } from 'react'
import Header from './common/header'
import Footer from './common/footer'

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


let bgColor = document.getElementsByClassName('filter-btn');

const Subscriptions = () => {  
const [allSubscriptions, changeFilter] = useState(AllSubsBox)

const AllFilter = () => {
  for (var i = 0; i < bgColor.length; i++) {
    bgColor[0].classList.add('active-button')
    bgColor[i].classList.remove('active-button')
    bgColor[i].classList.remove('active-btn')
  }
  changeFilter(AllSubsBox)
}
const LDFilter = () => {
  for (var i = 0; i < bgColor.length; i++) {
    bgColor[1].classList.add('active-button')
    bgColor[i].classList.remove('active-button')
    bgColor[i].classList.remove('active-btn')
  }
  changeFilter(LDSubs)}

const SDFilter = () => {
  for (var i = 0; i < bgColor.length; i++) {
    bgColor[2].classList.add('active-button')
    bgColor[i].classList.remove('active-button')
    bgColor[i].classList.remove('active-btn')
  }
  changeFilter(SDSubs)}
const PFilter = () => {
  for (var i = 0; i < bgColor.length; i++) {
    bgColor[3].classList.add('active-button')
    bgColor[i].classList.remove('active-button')
    bgColor[i].classList.remove('active-btn')
  }
  changeFilter(PSubs)}
const CFilter = () => {
  for (var i = 0; i < bgColor.length; i++) {
    bgColor[4].classList.add('active-button')
    bgColor[i].classList.remove('active-button')
    bgColor[i].classList.remove('active-btn')
  }
  changeFilter(CSubs)}
const KFilter = () => {
  for (var i = 0; i < bgColor.length; i++) {
    bgColor[5].classList.add('active-btn')
    bgColor[i].classList.remove('active-button')
  };
  changeFilter(KSubs)}

  return(
    <>
    <Header/>
    <main className='subscription-section'>

      {/* <h1>{all}</h1>
      <button type='button' onClick={letFilter}>click</button> */}


      <h1 class='subs-header'>SUBSCRIPTIONS</h1>
  
        <div class="filters-container">
          <div class="choose-pet-container">
            <form action="/action_page.php">
              <label for="pet-name">For:</label>
                <select name="pet-name" id="pet-name">
                  <option value="volvo">Choose Pet</option>
                </select>
            </form>
          </div>
  
            <div class="subs-filter">
              <ol>
                <li class='filter-btn active-button' onClick={AllFilter}>All</li>
                <li class='filter-btn' onClick={LDFilter}>Large Dogs</li>
                <li class='filter-btn' onClick={SDFilter}>Small Dogs</li>
                <li class='filter-btn' onClick={PFilter}>Puppies</li>
                <li class='filter-btn' onClick={CFilter}>Cats</li>
                <li class='filter-btn' onClick={KFilter}>Kittens</li>
              </ol>
            </div>
          </div> 
        <div className="subs-box-container">
          {allSubscriptions}
        </div>
  
     </main>
     <Footer/>
    </>
    );

};

const AllSubsBox = () => {
  return(
  <>
  
      <BasicSubsBox 
      img = {ldBasic} 
      title='LD BASIC' 
      subsType = '(large dogs basic subscription)'
      inclution1 = 'Dog Food' 
      inclution2='Dog Treats' 
      subsDescription = "All natural, organic, and palatable that surely your dog/s will love. Supplies are adequate for larger dog breeds." 
      recomendation = "Recommended for dogs between 10-50 Kilograms"
      pricing= "₱699/per Month"
      />
      <PremiumSubsBox 
      img = {ldPremium} 
      title='LD PREMIUM' 
      subsType = '(large dogs premium subscription)'
      inclution1 = 'Dog Food' 
      inclution2='Dog Treats' 
      inclution3='Pet Multivitamins'
      subsDescription = "All natural, organic, healthy, and palatable that surely your dog/s will love. Supplies are adequate for larger dog breeds." 
      recomendation = "Recommended for dogs between 10-50 Kilograms"
      pricing= "₱999/per Month"
      />
      <BasicSubsBox 
      img = {sdBasic} 
      title='SD BASIC' 
      subsType = '(small dogs basic subscription)'
      inclution1 = 'Dog Food' 
      inclution2='Dog Treats' 
      subsDescription = "All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds." 
      recomendation = "Recommended for dogs under 10 Kilograms"
      pricing= "₱499/per Month"
      />
       <PremiumSubsBox 
      img = {sdPremium} 
      title='SD PREMIUM' 
      subsType = '(small dogs premium subscription)'
      inclution1 = 'Dog Food' 
      inclution2='Dog Treats' 
      inclution3='Pet Multivitamins'
      subsDescription = "All natural, organic, healthy and palatable that surely your dog/s will love. Supplies are only adequate for smaller dog breeds." 
      recomendation = "Recommended for dogs under 10 Kilograms"
      pricing= "₱599/per Month"
      />
      <BasicSubsBox 
      img = {cBasic} 
      title='C BASIC' 
      subsType = '(cats basic subscription)'
      inclution1 = 'Cat Food' 
      inclution2='Cat Treats' 
      subsDescription = "An all natural, organic, and well balanced supply that surely your cats will love. Supplies are adequately enough for any sizes of cats." 
      recomendation = "Recommended for cats of any sizes"
      pricing= "₱499/per Month"
      />
      <PremiumSubsBox 
      img = {cPremium} 
      title='C PREMIUM' 
      subsType = '(cats premium subscription)'
      inclution1 = 'Cat Food' 
      inclution2='Cat Treats' 
      inclution3='Pet Multivitamins'
      subsDescription = "A Healthy, organic, all natural, and well-balanced supply that surely your cats will love. Supplies are adequately enough for any sizes of cats." 
      recomendation = "Recommended for cats of any sizes"
      pricing= "₱599/per Month"
      />
      <BasicSubsBox 
      img = {pBasic} 
      title='P BASIC' 
      subsType = '(puppies basic subscription)'
      inclution1 = 'Puppy Food' 
      inclution2='Dog Treats' 
      subsDescription = "All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds." 
      recomendation = "Recommended for dogs under 10 Kilograms"
      pricing= "₱499/per Month"
      />
      <PremiumSubsBox 
      img = {pPremium} 
      title='P PREMIUM' 
      subsType = '(puppies premium subscription)'
      inclution1 = 'Puppy Food' 
      inclution2='Dog Treats' 
      inclution3='Pet Multivitamins'
      subsDescription = "All natural, organic, healthy, and palatable that surely your puppy/s will love. Supplies are only adequate for puppies." 
      recomendation = "Recommended for puppies between 1-6 Months old"
      pricing= "₱599/per Month"
      />
      <BasicSubsBox 
      img = {kBasic} 
      title='K BASIC' 
      subsType = '(kittens basic subscription)'
      inclution1 = 'Kitten Food' 
      inclution2='Cat Treats' 
      subsDescription = "An all natural, organic, and well balanced supply that surely your kittens will love. Supplies are adequately enough for any sizes of kittens." 
      recomendation = "Recommended for kittens of any sizes"
      pricing= "₱499/per Month"
      />
      <PremiumSubsBox 
      img = {kPremium} 
      title='K PREMIUM' 
      subsType = '(kittens premium subscription)'
      inclution1 = 'Kitten Food' 
      inclution2='Cat Treats' 
      inclution3='Pet Multivitamins'
      subsDescription = "A Healthy, organic, all natural, and well-balanced supply that surely your kittens will love. Supplies are adequately enough for any sizes of kittens." 
      recomendation = "Recommended for kittens of any sizes"
      pricing= "₱599/per Month"
      />

  </>
  )
}

const BasicSubsBox = (props) => {
  return(
    <>

      <div className='SubsBox'>
        <div className='subs-first-row'>
          <img src={props.img}/>

          <div className='subs-details'>
            <p><strong>{[props.title]} </strong>{props.subsType}</p>
            INCLUTIONS<ul>
              <li>{props.inclution1}</li>
              <li>{props.inclution2}</li>
            </ul>
          
            <p>{props.subsDescription}</p>
            <strong><p>{props.recomendation}</p></strong>
          </div>
        </div>

          <div  className='subs-second-row'>
            <h5>{props.pricing}</h5>
            <p id='billing-colored'>BILLED MONTHLY</p>
            <button>Subscribe</button>
          </div>
         
      </div>

    </>
    );
};

const PremiumSubsBox = (props) => {
  return(
    <>

      <div className='SubsBox'>
        <div className='subs-first-row'>
          <img src={props.img}/>

          <div className='subs-details'>
            <p><strong>{[props.title]} </strong>{props.subsType}</p>
            INCLUTIONS<ul>
              <li>{props.inclution1}</li>
              <li>{props.inclution2}</li>
              <li>{props.inclution3}</li>
            </ul>

            <p>{props.subsDescription}</p>
            <strong><p>{props.recomendation}</p></strong>
          </div>
        </div>
        <div  className='subs-second-row'>
            <h5>{props.pricing}</h5>
            <p id='billing-colored'>BILLED MONTHLY</p>
            <button>Subscribe</button>
        </div>
      

      </div>

    </>
    );
};

const LDSubs = () => {
  return(
    <>
      
    <BasicSubsBox 
    img = {ldBasic} 
    title='LD BASIC' 
    subsType = '(large dogs basic subscription)'
    inclution1 = 'Dog Food' 
    inclution2='Dog Treats' 
    subsDescription = "All natural, organic, and palatable that surely your dog/s will love. Supplies are adequate for larger dog breeds." 
    recomendation = "Recommended for dogs between 10-50 Kilograms"
    pricing= "₱699/per Month"
    />
    <PremiumSubsBox 
    img = {ldPremium} 
    title='LD PREMIUM' 
    subsType = '(large dogs premium subscription)'
    inclution1 = 'Dog Food' 
    inclution2='Dog Treats' 
    inclution3='Pet Multivitamins'
    subsDescription = "All natural, organic, healthy, and palatable that surely your dog/s will love. Supplies are adequate for larger dog breeds." 
    recomendation = "Recommended for dogs between 10-50 Kilograms"
    pricing= "₱999/per Month"
    />
      
    </>
    );
};

const SDSubs = () => {
  return(
    <>
      
    <BasicSubsBox 
    img = {sdBasic} 
    title='SD BASIC' 
    subsType = '(small dogs basic subscription)'
    inclution1 = 'Dog Food' 
    inclution2='Dog Treats' 
    subsDescription = "All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds." 
    recomendation = "Recommended for dogs under 10 Kilograms"
    pricing= "₱499/per Month"
    />
      <PremiumSubsBox 
    img = {sdPremium} 
    title='SD PREMIUM' 
    subsType = '(small dogs premium subscription)'
    inclution1 = 'Dog Food' 
    inclution2='Dog Treats' 
    inclution3='Pet Multivitamins'
    subsDescription = "All natural, organic, healthy and palatable that surely your dog/s will love. Supplies are only adequate for smaller dog breeds." 
    recomendation = "Recommended for dogs under 10 Kilograms"
    pricing= "₱599/per Month"
    />
      
    </>
    );
};

const PSubs = () => {
  return(
    <>
      
    <BasicSubsBox 
    img = {pBasic} 
    title='P BASIC' 
    subsType = '(puppies basic subscription)'
    inclution1 = 'Puppy Food' 
    inclution2='Dog Treats' 
    subsDescription = "All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds." 
    recomendation = "Recommended for dogs under 10 Kilograms"
    pricing= "₱499/per Month"
    />
    <PremiumSubsBox 
    img = {pPremium} 
    title='P PREMIUM' 
    subsType = '(puppies premium subscription)'
    inclution1 = 'Puppy Food' 
    inclution2='Dog Treats' 
    inclution3='Pet Multivitamins'
    subsDescription = "All natural, organic, healthy, and palatable that surely your puppy/s will love. Supplies are only adequate for puppies." 
    recomendation = "Recommended for puppies between 1-6 Months old"
    pricing= "₱599/per Month"
    />
      
    </>
    );
};

const CSubs = () => {
  return(
    <>
      
    <BasicSubsBox 
    img = {cBasic} 
    title='C BASIC' 
    subsType = '(cats basic subscription)'
    inclution1 = 'Cat Food' 
    inclution2='Cat Treats' 
    subsDescription = "An all natural, organic, and well balanced supply that surely your cats will love. Supplies are adequately enough for any sizes of cats." 
    recomendation = "Recommended for cats of any sizes"
    pricing= "₱499/per Month"
    />
    <PremiumSubsBox 
    img = {cPremium} 
    title='C PREMIUM' 
    subsType = '(cats premium subscription)'
    inclution1 = 'Cat Food' 
    inclution2='Cat Treats' 
    inclution3='Pet Multivitamins'
    subsDescription = "A Healthy, organic, all natural, and well-balanced supply that surely your cats will love. Supplies are adequately enough for any sizes of cats." 
    recomendation = "Recommended for cats of any sizes"
    pricing= "₱599/per Month"
    />
      
    </>
    );
};

const KSubs = () => {
  return(
    <>
      
    <BasicSubsBox 
    img = {kBasic} 
    title='K BASIC' 
    subsType = '(kittens basic subscription)'
    inclution1 = 'Kitten Food' 
    inclution2='Cat Treats' 
    subsDescription = "An all natural, organic, and well balanced supply that surely your kittens will love. Supplies are adequately enough for any sizes of kittens." 
    recomendation = "Recommended for kittens of any sizes"
    pricing= "₱499/per Month"
    />
    <PremiumSubsBox 
    img = {kPremium} 
    title='K PREMIUM' 
    subsType = '(kittens premium subscription)'
    inclution1 = 'Kitten Food' 
    inclution2='Cat Treats' 
    inclution3='Pet Multivitamins'
    subsDescription = "A Healthy, organic, all natural, and well-balanced supply that surely your kittens will love. Supplies are adequately enough for any sizes of kittens." 
    recomendation = "Recommended for kittens of any sizes"
    pricing= "₱599/per Month"
    />
  
    </>
    );
};




export default Subscriptions;