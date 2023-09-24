import '../css/footer.css'

const Footer = () => {
    return(
    <footer>
        <div className="footer-wrapper">
            <div className="col1-container">
                <ul>
                    <li>
                        <img src="assets/footerMobile.png" alt="footer-icon" className="footer-icons"/>
                        <a href="#">+63 912 456 7890</a>
                    </li>
                    <li>
                        <img src="assets/footerFb.png" alt="footer-icon" className="footer-icons"/>
                        <a href="https://www.facebook.com/">Follow Us On Facebook</a>
                    </li>
                    <li>
                        <img src="assets/footerIg.png" alt="footer-icon" className="footer-icons"/>
                        <a href="https://www.instagram.com/">Follow Us On Instagram</a></li>
                </ul>

                <div className="stay-updated">
                    <p><strong>STAY UPDATED</strong>
                    <br/>
                    Input your email for latest updates</p>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon1">Submit</button>
                    </div>
                </div>
            </div>
            <div className="col2-container">
                <ul>
                    <li><strong>SUBSCRIBE NOW</strong></li>
                    <li><a href="#">Dogs</a></li>
                    <li><a href="#">Cats</a></li>
                </ul>
            </div>
            <div className="col3-container">
                <ul>
                    <li><strong>USEFUL LINKS</strong></li>
                    <li><a href="#">Pet Survey</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <p id="copyright-text" className="foot-container">Purrfect Picks © 2023.</p>
    </footer>
    )
}

export default Footer;