import '../css/subscriptions.css'
import Header from './common/header'
import Footer from './common/footer'

import dogTreats from '../assets/dogTreats.png'


const Subscriptions = (props) => {

    return(
      <>
      <Header/>
      <main class='subscription-section'>
          
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
              <li class='list active-button' data-filter="all">All</li>
              <li class='list' data-filter="large-dogs">Large Dogs</li>
              <li class='list' data-filter="small-dogs">Small Dogs</li>
              <li class='list' data-filter="puppies">Puppies</li>
              <li class='list' data-filter="cats">Cats</li>
              <li class='list' data-filter="kittens">Kittens</li>
            </ol>
          </div>
        </div>

        <div class='producct'>

          <div class="itemBox" data-item="Large-dogs">

            <div className="subs-container">

              <div className="row1-container">

                <img src={dogTreats}/>
                  <div>
                    <p><span className='subs-heading'>LD BASIC </span>(large dog basic subscription)</p>
                    <span><p>INCLUTIONS</p></span>
                    <ul>
                      <li>Dog Food</li>
                      <li>Dog Treats</li>
                    </ul>
                    <p>All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds.</p>
                    <strong><p>Recommended for dogs under 10 Kilograms</p></strong>
                  </div>

              </div>

              <div className="row2-container">
                <h4>699/per Month</h4>
                  <p>BILLED MONTHLY</p>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div class="itemBox" data-item="Large-dogs">

            <div className="subs-container">

              <div className="row1-container">

                <img src={image}/>
                  <div>
                    <p><span className='subs-heading'>LD BASIC </span>(large dog basic subscription)</p>
                    <span><p>INCLUTIONS</p></span>
                    <ul>
                      <li>Dog Food</li>
                      <li>Dog Treats</li>
                    </ul>
                    <p>All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds.</p>
                    <strong><p>Recommended for dogs under 10 Kilograms</p></strong>
                  </div>

              </div>

              <div className="row2-container">
                <h4>699/per Month</h4>
                  <p>BILLED MONTHLY</p>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div class="itemBox" data-item="Large-dogs">

            <div className="subs-container">

              <div className="row1-container">

                <img src={dogTreats}/>
                  <div>
                    <p><span className='subs-heading'>LD BASIC </span>(large dog basic subscription)</p>
                    <span><p>INCLUTIONS</p></span>
                    <ul>
                      <li>Dog Food</li>
                      <li>Dog Treats</li>
                    </ul>
                    <p>All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds.</p>
                    <strong><p>Recommended for dogs under 10 Kilograms</p></strong>
                  </div>

              </div>

              <div className="row2-container">
                <h4>699/per Month</h4>
                  <p>BILLED MONTHLY</p>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div class="itemBox" data-item="Large-dogs">

            <div className="subs-container">

              <div className="row1-container">

                <img src={dogTreats}/>
                  <div>
                    <p><span className='subs-heading'>LD BASIC </span>(large dog basic subscription)</p>
                    <span><p>INCLUTIONS</p></span>
                    <ul>
                      <li>Dog Food</li>
                      <li>Dog Treats</li>
                    </ul>
                    <p>All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds.</p>
                    <strong><p>Recommended for dogs under 10 Kilograms</p></strong>
                  </div>

              </div>

              <div className="row2-container">
                <h4>699/per Month</h4>
                  <p>BILLED MONTHLY</p>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div class="itemBox" data-item="Large-dogs">

            <div className="subs-container">

              <div className="row1-container">

                <img src={dogTreats}/>
                  <div>
                    <p><span className='subs-heading'>LD BASIC </span>(large dog basic subscription)</p>
                    <span><p>INCLUTIONS</p></span>
                    <ul>
                      <li>Dog Food</li>
                      <li>Dog Treats</li>
                    </ul>
                    <p>All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds.</p>
                    <strong><p>Recommended for dogs under 10 Kilograms</p></strong>
                  </div>

              </div>

              <div className="row2-container">
                <h4>699/per Month</h4>
                  <p>BILLED MONTHLY</p>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div class="itemBox" data-item="Large-dogs">

            <div className="subs-container">

              <div className="row1-container">

                <img src={dogTreats}/>
                  <div>
                    <p><span className='subs-heading'>LD BASIC </span>(large dog basic subscription)</p>
                    <span><p>INCLUTIONS</p></span>
                    <ul>
                      <li>Dog Food</li>
                      <li>Dog Treats</li>
                    </ul>
                    <p>All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds.</p>
                    <strong><p>Recommended for dogs under 10 Kilograms</p></strong>
                  </div>

              </div>

              <div className="row2-container">
                <h4>699/per Month</h4>
                  <p>BILLED MONTHLY</p>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div class="itemBox" data-item="Large-dogs">

            <div className="subs-container">

              <div className="row1-container">

                <img src={dogTreats}/>
                  <div>
                    <p><span className='subs-heading'>LD BASIC </span>(large dog basic subscription)</p>
                    <span><p>INCLUTIONS</p></span>
                    <ul>
                      <li>Dog Food</li>
                      <li>Dog Treats</li>
                    </ul>
                    <p>All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds.</p>
                    <strong><p>Recommended for dogs under 10 Kilograms</p></strong>
                  </div>

              </div>

              <div className="row2-container">
                <h4>699/per Month</h4>
                  <p>BILLED MONTHLY</p>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div class="itemBox" data-item="Large-dogs">

            <div className="subs-container">

              <div className="row1-container">

                <img src={dogTreats}/>
                  <div>
                    <p><span className='subs-heading'>LD BASIC </span>(large dog basic subscription)</p>
                    <span><p>INCLUTIONS</p></span>
                    <ul>
                      <li>Dog Food</li>
                      <li>Dog Treats</li>
                    </ul>
                    <p>All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds.</p>
                    <strong><p>Recommended for dogs under 10 Kilograms</p></strong>
                  </div>

              </div>

              <div className="row2-container">
                <h4>699/per Month</h4>
                  <p>BILLED MONTHLY</p>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div class="itemBox" data-item="Large-dogs">

            <div className="subs-container">

              <div className="row1-container">

                <img src={dogTreats}/>
                  <div>
                    <p><span className='subs-heading'>LD BASIC </span>(large dog basic subscription)</p>
                    <span><p>INCLUTIONS</p></span>
                    <ul>
                      <li>Dog Food</li>
                      <li>Dog Treats</li>
                    </ul>
                    <p>All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds.</p>
                    <strong><p>Recommended for dogs under 10 Kilograms</p></strong>
                  </div>

              </div>

              <div className="row2-container">
                <h4>699/per Month</h4>
                  <p>BILLED MONTHLY</p>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div class="itemBox" data-item="Large-dogs">

            <div className="subs-container">

              <div className="row1-container">

                <img src={dogTreats}/>
                  <div>
                    <p><span className='subs-heading'>LD BASIC </span>(large dog basic subscription)</p>
                    <span><p>INCLUTIONS</p></span>
                    <ul>
                      <li>Dog Food</li>
                      <li>Dog Treats</li>
                    </ul>
                    <p>All natural, organic, and palatable that surely your dogs will love. Supplies are only adequate for smaller dog breeds.</p>
                    <strong><p>Recommended for dogs under 10 Kilograms</p></strong>
                  </div>

              </div>

              <div className="row2-container">
                <h4>699/per Month</h4>
                  <p>BILLED MONTHLY</p>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

        </div>

      
      </main>
      <Footer/>
      </>
        
    )
}

export default Subscriptions;



// let list = document.querySelectorAll('.list');
// let itemBox = document.querySelectorAll('.itemBox');

// for(let i = 0; i < list.length; i++){
//   list[i].addEventListener('click', () => {
//     for(let j = 0; j < list.length; j++){
//       list[j].classList.remove('active');
//     }
//     this.classList.add('active');

//     let dataFilter = this.getAttribute('data-filter');
    
//     for(let k = 0; k < itemBox.length; k++){
//       itemBox[k].classList.remove('active');
//       itemBox[k].classList.add('hide');

//       if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
//         itemBox[k].classList.remove('hide');
//         itemBox[k].classList.add('active');
//       }
//     }
//   })
// }