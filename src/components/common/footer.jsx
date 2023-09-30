import '../../css/footer.css'
import footerFb from '../../assets/footerFb.png'
import footerIg from '../../assets/footerIg.png'
import footerTwitter from '../../assets/footerTwitter.png'
import footerTiktok from '../../assets/footerTiktok.png'

const updateAlert = () => {
  alert('Purrfect Picks will update you soon!')
}

const Footer = () => {
    return(
    <footer>
        <div class="footer-container">
          <div class="footer-col1">
            <h5>STAY UPDATED</h5>
            <p>Input your email for latest updates</p>
              <div class="input-group mb-3">
                <input type="text" class="form-control" name='update-btn' placeholder="purrpicks@gmail.com" aria-label="Example text with button addon" aria-describedby="button-addon1" required/>
                <button class="btn btn-outline-secondary" name='update-btn' type="button" id="button-addon1" onClick={updateAlert}>Submit</button>
              </div>

          </div>
          <div class="footer-col2">
            <h5>FOLLOW US</h5>
              <div class="footer-icons-container">
                <a href="https://www.facebook.com/" target='_blank'><img src={footerFb} alt="footer-fb-icon"/></a>
                <a href="https://www.instagram.com/" target='_blank'><img src={footerIg} alt="footer-ig-icon"/></a>
                <a href="https://twitter.com/" target='_blank'><img src={footerTwitter} alt="footer-twt-icon"/></a>
                <a href="https://tiktok.com/" target='_blank'><img src={footerTiktok} alt="footer-tktk-icon"/></a>
              </div>
          </div>
          <div class="footer-col3">
            <h5>CONTACT US</h5>
            <u><a href='/'>About Us</a></u><br/>
            <a href="">+63 912 456 7890</a>
          </div>
        </div>
    
    
    <center><p id="copyright-text">Purrfect Picks © 2023.</p></center>
      </footer>
    )
}

export default Footer;