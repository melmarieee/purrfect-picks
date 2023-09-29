import '../../css/navbar.css'
import LogoWhite from "../../assets/purfectLogoWhite.png"


const Header = () => {
    return(
        <header>
            <a href="index.html" class="navbar-logo">
            <img src={LogoWhite} alt="purrfect-picks-logo" id="navbar-logo1"/>
            </a>

            <ul class="navbar-ul">
            <li class="navbar-li"><a href="/subscriptions" class="navbar-a">Subscriptions</a></li>
            <li class="navbar-li"><a href="/products" class="navbar-a">Products</a></li>
            <li class="navbar-li"><a href="/clinic" class="navbar-a">Clinic</a></li>
            <li class="navbar-li"><a href="/login" class="navbar-a">Login/ Sign Up</a></li>
            </ul>

            <div class="navbar-menu">
            <i class="fa-solid fa-bars"></i>
            </div>

        </header>
    )
}

export default Header;