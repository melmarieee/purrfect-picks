import '../../css/footer.css'
import footerFb from '../../assets/footerFb.png'
import footerIg from '../../assets/footerIg.png'
import footerTwitter from '../../assets/footerTwitter.png'
import footerTiktok from '../../assets/footerTiktok.png'

const Footer = () => {
    return(
    <footer>
        <div class="footer-container">
          <div class="footer-col1">
            <h5>STAY UPDATED</h5>
            <p>Input your email for latest updates</p>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon1">Submit</button>
              </div>
          </div>
          <div class="footer-col2">
            <h5>FOLLOW US</h5>
              <div class="footer-icons-container">
                <a href=""><img src={footerFb} alt="footer-fb-icon"/></a>
                <a href=""><img src={footerIg} alt="footer-ig-icon"/></a>
                <a href=""><img src={footerTwitter} alt="footer-twt-icon"/></a>
                <a href=""><img src={footerTiktok} alt="footer-tktk-icon"/></a>
              </div>
          </div>
          <div class="footer-col3">
            <h5>CONTACT US</h5>
            <a href="">+63 912 456 7890</a>
          </div>
        </div>
    
    
    <center><p id="copyright-text">Purrfect Picks © 2023.</p></center>
      </footer>
    )
}

export default Footer;