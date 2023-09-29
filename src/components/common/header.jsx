import '../../css/navbar.css'
import LogoWhite from "../../assets/purfectLogoWhite.png"
import React, {useState, useEffect} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';

  


const Header = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)


    const [deviceWidth, _] = useState(
        window.screen.width >= 764
    )
    return(
        <div>
           <Navbar className='header' expand={deviceWidth} {...args}>
                <a href="/" class="navbar-logo">
                    <img src={LogoWhite} alt="purrfect-picks-logo" id="navbar-logo1"/>
                </a>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
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
            </Nav>
            </Collapse>
            </Navbar>
      </div>




       
    )
}

export default Header;



{/* <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="/subscriptions">Subscription</NavLink>
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
                    </Nav>
                </Collapse> */}