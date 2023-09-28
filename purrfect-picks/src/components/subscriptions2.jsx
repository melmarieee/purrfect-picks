import '../css/subscriptions2.css'
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

const allButton = document.querySelectorAll('.allFilter');
const ldButton = document.querySelectorAll('.largeDogsFilter');
const sdButton = document.querySelectorAll('.smallDogsFilter');
const pButton = document.querySelectorAll('.puppiesFilter');
const cButton = document.querySelectorAll('.catsFilter');
const kButton = document.querySelectorAll('.kittensFilter');


allButton.forEach(element => {
  element.addEventListener('click', () => {
      const text = element.innerHTML;
      console.log(text)
  });
});

ldButton.forEach(element => {
  element.addEventListener('click', () => {
      const text = element.innerHTML;
      console.log(text)
  });
});

sdButton.forEach(element => {
  element.addEventListener('click', () => {
      const text = element.innerHTML;
      console.log(text)
  });
});

pButton.forEach(element => {
  element.addEventListener('click', () => {
      const text = element.innerHTML;
      console.log(text)
  });
});

cButton.forEach(element => {
  element.addEventListener('click', () => {
      const text = element.innerHTML;
      console.log(text)
  });
});

kButton.forEach(element => {
  element.addEventListener('click', () => {
      const text = element.innerHTML;
      console.log(text)
  });
});


const Subscriptions2 = () => {  

 


  return(
  <>
  <main className='subscription-section'>
    <h1 class='subs-header'>SUBSCRIPTIONS</h1>

      <div class="filters-container">
        <div class="choose-pet-container">
          <form action="/action_page.php">
            <label for="pet-name">For:</label>
              <select name="pet-name" id="pet-name">
                <option value="volvo">Choose Pet</option>
              </select>
            {/* <input type="submit" value="Submit"/> */}
          </form>
        </div>

          <div class="subs-filter">
            <ol>
              <li class='list allFilter active-button'>All</li>
              <li class='list largeDogsFilter'>Large Dogs</li>
              <li class='list smallDogsFilter'>Small Dogs</li>
              <li class='list puppiesFilter'>Puppies</li>
              <li class='list catsFilter'>Cats</li>
              <li class='list kittensFilter'>Kittens</li>
            </ol>
          </div>
        </div> 

    <BasicSubsBox 
    img = {ldBasic} 
    title='LD BASIC' 
    subsType = '(large dogs basic subscription)'
    inclution1 = 'Dog Food' 
    inclution2='Dog Treats' 
    subsDescription = "All natural, organic, and palatable that surely your dog/s will love. Supplies are adequate for larger dog breeds." 
    recomendation = "Recommended for dogs between 10-50 Kilograms"
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
    />
    <BasicSubsBox 
    img = {sdBasic} 
    title='SD BASIC' 
    subsType = '(small dogs basic subscription)'
    inclution1 = 'Dog Food' 
    inclution2='Dog Treats' 
    subsDescription = "All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds." 
    recomendation = "Recommended for dogs under 10 Kilograms"
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
    />
    <BasicSubsBox 
    img = {cBasic} 
    title='C BASIC' 
    subsType = '(cats basic subscription)'
    inclution1 = 'Cat Food' 
    inclution2='Cat Treats' 
    subsDescription = "An all natural, organic, and well balanced supply that surely your cats will love. Supplies are adequately enough for any sizes of cats." 
    recomendation = "Recommended for cats of any sizes"
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
    />
    <BasicSubsBox 
    img = {pBasic} 
    title='P BASIC' 
    subsType = '(puppies basic subscription)'
    inclution1 = 'Puppy Food' 
    inclution2='Dog Treats' 
    subsDescription = "All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds." 
    recomendation = "Recommended for dogs under 10 Kilograms"
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
    />
    <BasicSubsBox 
    img = {kBasic} 
    title='K BASIC' 
    subsType = '(kittens basic subscription)'
    inclution1 = 'Kitten Food' 
    inclution2='Cat Treats' 
    subsDescription = "An all natural, organic, and well balanced supply that surely your kittens will love. Supplies are adequately enough for any sizes of kittens." 
    recomendation = "Recommended for kittens of any sizes"
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
    />

   </main>
  </>
  );
  
};

const BasicSubsBox = (props) => {
  return(
    <>

      <div>
        <img src={props.img} style={{width: '300px'}}/>

         <div>
          <p><strong>{[props.title]} </strong>{props.subsType}</p>
          <ul>INCLUTIONS
            <li>{props.inclution1}</li>
            <li>{props.inclution2}</li>
          </ul>

          <p>{props.subsDescription}</p>
          <strong><p>{props.recomendation}</p></strong>
         </div>

      </div>

    </>
    );
};

const PremiumSubsBox = (props) => {
  return(
    <>

      <div>
        <img src={props.img} style={{width: '300px'}}/>

         <div>
          <p><strong>{[props.title]} </strong>{props.subsType}</p>
          <ul>INCLUTIONS
            <li>{props.inclution1}</li>
            <li>{props.inclution2}</li>
            <li>{props.inclution3}</li>
          </ul>

          <p>{props.subsDescription}</p>
          <strong><p>{props.recomendation}</p></strong>
         </div>

      </div>

    </>
    );
};

const LDSubs = (props) => {
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
    />
      
    </>
    );
};

const SDSubs = (props) => {
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
    />
      
    </>
    );
};

const PSubs = (props) => {
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
    />
      
    </>
    );
};

const CSubs = (props) => {
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
    />
      
    </>
    );
};

const KSubs = (props) => {
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
    />
  
    </>
    );
};




export default Subscriptions2;