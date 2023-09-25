import '../../css/navbar.css'
import Logo from "../../assets/purfectLogo.png"
import LogoWhite from "../../assets/purfectLogoWhite.png"


const Header = () => {
    return(
        <header>
            <a href="index.html" className="navbar-logo">
                <img src={Logo} alt="purrfect-picks-logo" id="navbar-logo1"/>
                <img src={LogoWhite} alt="purrfect-picks-logo" id="navbar-logo2"/>
            </a>
            <ul className="navbar-ul">
            <li className="navbar-li"><a href="subscription.html" className="navbar-a">Subscriptions</a></li>
            <li className="navbar-li"><a href="contact-us.html" className="navbar-a">Contact Us</a></li>
            <li className="navbar-li"><a href="login.html" className="navbar-a">Login/ Sign Up</a></li>
            </ul>
        
            <div className="navbar-menu">
                <i className="fa-solid fa-bars"></i>
            </div>
      </header>
    )
}

export default Header;