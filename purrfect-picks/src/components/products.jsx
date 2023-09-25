import '../css/products.css'
import instIcon from '../assets/inst-icon.png'
import dogFood from '../assets/dogFood.png'
import puppyFood from '../assets/puppyFood.png'
import catFood from '../assets/catFood.png'
import kittenFood from '../assets/kittenFood.png'
import dogTreats from '../assets/dogTreats.png'
import catTreats from '../assets/catTreats.png'
import petVits from '../assets/petVits.png'

const Products = () => {
    return(
      <div>
        <main className="products-section">
          <h1>PRODUCTS</h1>

          <div className="instructions-cont">
            <img src={instIcon} alt="inst-icon" />
            <p>Hover to see description and ingredient list</p>
          </div>

          <div className="filter-by-cont">
            <p id='filter-text'>Filter by</p>

            <button class="filter-btn active-btn" id="all-button">All</button>
            <button class="filter-btn">Dogs</button>
            <button class="filter-btn">Cats</button>
            <select class="filter-btn" id="categoryDropdown">
        <option class="filter-btn" value="option1">Pet Supplies </option>
        <option class="filter-btn" value="option2">Dogs subscription package</option>
        <option class="filter-btn" value="option3">Cats subscription package</option>
        <option class="filter-btn" value="option4">Puppies subscription package</option>
        <option class="filter-btn" value="option5">Kittens subscription package</option>
            </select>
          </div>

          <div className="products-container">

            <div class="prods-card">
              <div class="cont prod-img">
                <div class="prods-content">
                  <img src={dogFood} alt="purrfect-steps"/>
                </div>
              </div>
          
              <div class="cont prod-desc">
                <div class="prods-content">
                  <p><strong>ADULT DOG FOOD</strong></p>
                  <p>Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving. Say goodbye to allergies and hello to a happier, healthier dog!</p>
                  <p><em>Ingredients</em></p>
                  <p>Grass Fed Beef, Goat, Organic Chicken, Quinoa, Sweet Potatoes, Peas, Carrots, Spinach, Blueberries, Chicken Fat, Flaxseed, Salmon Oil, Chicory Root Extract, Lactobacillus acidophilus,  Iron, Zinc, Copper, Vitamin E, Vitamin D3, Vitamin A, DHA (Docosahexaenoic Acid), Glucosamine, and Chondroitin.</p>
                </div>
              </div>
            </div>
          
            <div class="prods-card">
              <div class="cont prod-img">
                <div class="prods-content">
                  <img src={puppyFood} alt="purrfect-steps"/>
                </div>
              </div>
          
              <div class="cont prod-desc">
                <div class="prods-content">
                  <p><strong>ADULT DOG FOOD</strong></p>
                  <p>Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving. Say goodbye to allergies and hello to a happier, healthier dog!</p>
                  <p><em>Ingredients</em></p>
                  <p>Grass Fed Beef, Goat, Organic Chicken, Quinoa, Sweet Potatoes, Peas, Carrots, Spinach, Blueberries, Chicken Fat, Flaxseed, Salmon Oil, Chicory Root Extract, Lactobacillus acidophilus,  Iron, Zinc, Copper, Vitamin E, Vitamin D3, Vitamin A, DHA (Docosahexaenoic Acid), Glucosamine, and Chondroitin.</p>
                </div>
              </div>
            </div>
          
            <div class="prods-card">
              <div class="cont prod-img">
                <div class="prods-content">
                  <img src={catFood} alt="purrfect-steps"/>
                </div>
              </div>
          
              <div class="cont prod-desc">
                <div class="prods-content">
                <p><strong>ADULT DOG FOOD</strong></p>
                  <p>Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving. Say goodbye to allergies and hello to a happier, healthier dog!</p>
                  <p><em>Ingredients</em></p>
                  <p>Grass Fed Beef, Goat, Organic Chicken, Quinoa, Sweet Potatoes, Peas, Carrots, Spinach, Blueberries, Chicken Fat, Flaxseed, Salmon Oil, Chicory Root Extract, Lactobacillus acidophilus,  Iron, Zinc, Copper, Vitamin E, Vitamin D3, Vitamin A, DHA (Docosahexaenoic Acid), Glucosamine, and Chondroitin.</p>
                </div>
              </div>
            </div>

            <div class="prods-card">
              <div class="cont prod-img">
                <div class="prods-content">
                  <img src={kittenFood} alt="purrfect-steps"/>
                </div>
              </div>
          
              <div class="cont prod-desc">
                <div class="prods-content">
                <p><strong>ADULT DOG FOOD</strong></p>
                  <p>Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving. Say goodbye to allergies and hello to a happier, healthier dog!</p>
                  <p><em>Ingredients</em></p>
                  <p>Grass Fed Beef, Goat, Organic Chicken, Quinoa, Sweet Potatoes, Peas, Carrots, Spinach, Blueberries, Chicken Fat, Flaxseed, Salmon Oil, Chicory Root Extract, Lactobacillus acidophilus,  Iron, Zinc, Copper, Vitamin E, Vitamin D3, Vitamin A, DHA (Docosahexaenoic Acid), Glucosamine, and Chondroitin.</p>
                </div>
              </div>
            </div>
          
            <div class="prods-card">
              <div class="cont prod-img">
                <div class="prods-content">
                  <img src={dogTreats} alt="purrfect-steps"/>
                </div>
              </div>
          
              <div class="cont prod-desc">
                <div class="prods-content">
                  <p><strong>ADULT DOG FOOD</strong></p>
                  <p>Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving. Say goodbye to allergies and hello to a happier, healthier dog!</p>
                  <p><em>Ingredients</em></p>
                  <p>Grass Fed Beef, Goat, Organic Chicken, Quinoa, Sweet Potatoes, Peas, Carrots, Spinach, Blueberries, Chicken Fat, Flaxseed, Salmon Oil, Chicory Root Extract, Lactobacillus acidophilus,  Iron, Zinc, Copper, Vitamin E, Vitamin D3, Vitamin A, DHA (Docosahexaenoic Acid), Glucosamine, and Chondroitin.</p>
                </div>
              </div>
            </div>
          
            <div class="prods-card">
              <div class="cont prod-img">
                <div class="prods-content">
                  <img src={catTreats} alt="purrfect-steps"/>
                </div>
              </div>
          
              <div class="cont prod-desc">
                <div class="prods-content">
                  <p><strong>ADULT DOG FOOD</strong></p>
                  <p>Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving. Say goodbye to allergies and hello to a happier, healthier dog!</p>
                  <p><em>Ingredients</em></p>
                  <p>Grass Fed Beef, Goat, Organic Chicken, Quinoa, Sweet Potatoes, Peas, Carrots, Spinach, Blueberries, Chicken Fat, Flaxseed, Salmon Oil, Chicory Root Extract, Lactobacillus acidophilus,  Iron, Zinc, Copper, Vitamin E, Vitamin D3, Vitamin A, DHA (Docosahexaenoic Acid), Glucosamine, and Chondroitin.</p>
                </div>
              </div>
            </div>

            <div class="prods-card">
              <div class="cont prod-img">
                <div class="prods-content">
                  <img src={petVits} alt="purrfect-steps"/>
                </div>
              </div>
          
              <div class="cont prod-desc">
                <div class="prods-content">
                  <p><strong>ADULT DOG FOOD</strong></p>
                  <p>Discover the ultimate in canine nutrition with our healthy, well-balanced, organic, hypoallergenic dog food. Crafted with care, it's the perfect blend of premium ingredients designed to keep your furry companion thriving. Say goodbye to allergies and hello to a happier, healthier dog!</p>
                  <p><em>Ingredients</em></p>
                  <p>Grass Fed Beef, Goat, Organic Chicken, Quinoa, Sweet Potatoes, Peas, Carrots, Spinach, Blueberries, Chicken Fat, Flaxseed, Salmon Oil, Chicory Root Extract, Lactobacillus acidophilus,  Iron, Zinc, Copper, Vitamin E, Vitamin D3, Vitamin A, DHA (Docosahexaenoic Acid), Glucosamine, and Chondroitin.</p>
                </div>
              </div>
            </div>
          
            

          </div>


        </main>
      </div>
    )
}

export default Products;