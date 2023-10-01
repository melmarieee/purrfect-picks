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
    Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    UncontrolledDropdown
  } from 'reactstrap';


const Header = (props) => {
    const cart_user = window.localStorage.getItem("user");

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(JSON.parse(cart_user));
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

    const toggleLogout = () => {
        window.location.href = "/login";
    }

    const toggleAccount = () => {
        window.location.href = "/account";
    }

    const toggleTracker = () => {
        window.location.href = "/tracker";
    }


    const [deviceWidth, _] = useState(0)
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
                <NavLink href="/cart">
                    <span className=" text-muted float-end mx-2">
                        <MDBIcon className="text-light" icon="cart-shopping" />
                        <span className='text-light mx-2'> Cart {count} </span>
                    </span> 
                </NavLink>
                {
                    user ? 
                    <NavLink>
                        {user.name}
                        <UncontrolledDropdown group direction="down">
                            <DropdownToggle
                                caret
                                color="#952322"
                                className='buttoncaret'
                            />
                            <DropdownMenu>
                                <DropdownItem header>
                                Profile
                                </DropdownItem>
                                <DropdownItem onClick={toggleAccount.bind(this)}>
                                    Account
                                </DropdownItem>
                                <DropdownItem onClick={toggleTracker.bind(this)}>
                                    Track your orders
                                </DropdownItem>
                                <DropdownItem onClick={toggleLogout.bind(this)}>
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </NavLink>
                    :
                    <NavLink href="/login">Login/Signup</NavLink>
                }
                </div>
                
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
            
            <Nav className="ms-auto burger-menu" navbar>
                <div className="burger-menu-container">
                        <NavItem>
                        <NavLink href="/subscriptions" id='subs'>Subscriptions</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/products" id='prods'>Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/clinic" id='clinic'>Clinic</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/cart">
                            <span className=" text-muted float-end mx-2">
                                <MDBIcon className="text-light" fas icon="cart-shopping" />
                            </span> Cart {count}
                        </NavLink       >
                    </NavItem>
                    {
                        user ? 
                        <NavLink>
                            {user.name}
                            <UncontrolledDropdown group direction="down">
                                <DropdownToggle
                                    caret
                                    color="#952322"
                                    className='buttoncaret'
                                />
                                <DropdownMenu>
                                    <DropdownItem header>
                                    Profile
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a href="/account" className='text-dark'>
                                            Account settings
                                        </a>
                                    </DropdownItem>
                                    <DropdownItem href="/tracker">
                                        <a href="/tracker" className='text-dark'>
                                            Tracking    
                                        </a>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavLink>
                        :
                        <NavLink href="/login">Login/Signup</NavLink>
                    }
                </div>
            </Nav>
            
            </Collapse>
            </Navbar>
      </div>
    )
}

export default Header;