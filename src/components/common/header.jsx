import '../../css/navbar.css'
import LogoWhite from "../../assets/purfectLogoWhite.png"
import React, {useState} from 'react';
import {  MDBIcon } from "mdb-react-ui-kit";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    let count = 0;

    if (props.count) {
        count = props.count
    }


    const cart_session = window.localStorage.getItem("cart");
    if (cart_session) {
        const parsed_cart = JSON.parse(cart_session)
        count = parsed_cart.length
    }


    const [deviceWidth, _] = useState(
        window.screen.width <= 768
    )
    return(
        <div>
           <Navbar expand={deviceWidth} className='header py-3' >
                <a href="/" class="navbar-logo">
                    <img src={LogoWhite} alt="purrfect-picks-logo" id="navbar-logo1"/>
                </a>
                <div className="header-navbar-links">
                <NavLink href="/subscriptions" id='subs'>Subscriptions</NavLink>
                <NavLink href="/products" id='prods'>Products</NavLink>
                <NavLink href="/clinic" id='clinic'>Clinic</NavLink>
                <NavLink href="/subscriptions">Subscriptions</NavLink>
                <NavLink href="/products">Products</NavLink>
                <NavLink href="/Clinic">Clinic</NavLink>
                <NavLink href="/login">Login/Signup</NavLink>
                <NavLink href="/cart">
                    <span className=" text-muted float-end mx-2">
                        <MDBIcon className="text-light" icon="cart-shopping" />
                        <span className='text-light mx-2'>{count}</span>
                    </span> 
                    
                </NavLink>
                </div>
                
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
                <NavItem>
                    <NavLink href="/subscriptions">Subscriptions</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/products">Products</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/clinic">Clinic</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/login">Login/Signup</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/cart">
                        <span className=" text-muted float-end mx-2">
                            <MDBIcon className="text-light" fas icon="cart-shopping" />
                        </span> {count}
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
            </Navbar>
      </div>




       
    )
}

export default Header;