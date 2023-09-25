import '../css/payment.css'
import gcashLogo from '../assets/gcash-payment-option.png'
import paymayaLogo from '../assets/paymaya-payment-option.png'
import bdoLogo from '../assets/bdo-payment-option.png'
import bpiLogo from '../assets/bpi-payment-option.png'
import paypalLogo from '../assets/paypal-payment-option.png'
import gcashWhiteLogo from '../assets/gcash-white-logo.png'

const Payment = () => {
    return(
      <div class="payment-section">
        <section class="choose-payment-opt-section">
          <h1 class="payment-opt-header">CHOOSE YOUR PAYMENT OPTION</h1>

          <div class="payment-options-container">
            
            <a href="#gcash-navigator">
              <button class="payment-option-buttons">
              
                <img src={gcashLogo} alt="GCash" class="payment-option-img"/>
              </button>
            </a>
            
            
            <a href="" class="under-maintenance">
              <button class="payment-option-buttons" onclick="underMaintenance()">
                <img src={paymayaLogo} alt="PayMaya" class="payment-option-img"/>
              </button>
            </a>

            <a href="" class="under-maintenance">
              <button class="payment-option-buttons" onclick="underMaintenance()">
                <img src={bdoLogo} alt="BDO" class="payment-option-img"/>
              </button>
            </a>

            <a href="" class="under-maintenance">
              <button class="payment-option-buttons" onclick="underMaintenance()">
                <img src={bpiLogo} alt="BPI" class="payment-option-img"/>
              </button>
            </a>

            <a href="" class="under-maintenance">
              <button class="payment-option-buttons" onclick="underMaintenance()">
                <img src={paypalLogo} alt="PayPal" class="payment-option-img"/>
              </button>
            </a>
          </div>
        </section>
        
        <div id="gcash-navigator"></div>
        <section class="gcash-payment-option-section">

          <div class="gcash-logo-payment-option">
            <img src={gcashWhiteLogo} alt="gcash-logo"/>
          </div>

          <div class="gcash-payment-container">
            <div class="payment-info-container">
              <p class="left-part">Merchant</p>
              <p class="right-part">Purrfect Picks.ph</p>
            </div>
            <div class="payment-info-container">
              <p class="left-part">Amount Due</p>
              <p class="right-part price-of-subscription">PHP 399.00</p>
            </div>

            <div class="payment-info-container2">
              <p id="login-to-pay-with-gcash">Login to pay with GCash</p>
              <div class="mobile-number-container">
                <div>
                  <p id="Mobile-number">Mobile number</p>
                </div>
                <div class="gcash-number-container">
                  <p>+63 </p>
                  <input type="number" placeholder="9123456789"/>
                </div>
              </div>
            </div>

            <button id="gcash-next-button">NEXT</button>

          </div>

          <div class="gcash-register-container">
            <p>Don’t have a GCash account? <a href="https://m.gcash.com/gcashapp/gcash-promotion-web/2.0.0/index.html#/">Register now</a></p>
          </div>

        </section>
      </div>
    )
}

export default Payment;