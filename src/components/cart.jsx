import React, { useState, useEffect } from 'react';
import '../css/cart.css'
import Header from './common/header'
import Footer from './common/footer'
import dogFood from '../assets/dogFood.png'
import {  MDBIcon } from "mdb-react-ui-kit";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';


const Carts = () => {

    // Use session carts
    let session_carts = []
    let user_sessions = null
    const cart_session = window.localStorage.getItem("cart");
    const user_session = window.localStorage.getItem("user");
    if (cart_session) {
        session_carts = JSON.parse(cart_session)
    }

    if (user_session) {
        user_sessions = JSON.parse(user_session)
    }

    const [carts, setCarts] = useState(session_carts.reverse());
    const [acttiveCartIndex, setActiveCartIndex] = useState(0);
    const [carts_index, setCartsIndex] = useState(
        carts.map((_) => 1)
    );
    const [prev_but_index, setPrevButIndex] = useState(
        carts.map((_) => true)
    );
    const [modal, setModal] = useState(false);
    const shipping_fee = 65;
    let checkCart = ""

    const toggleModalClose = () => {
        setModal(!modal)
    }

    const toggleModalOpen = (target_index) => {
        setActiveCartIndex(target_index)
        toggleModalClose()
    }

    const appendCart = (index) => {
        // Carts Index
        let new_carts_index = [...carts_index];
        new_carts_index[index] += 1
        setCartsIndex(new_carts_index)

        let new_prev_but_index = [...prev_but_index];
        new_prev_but_index[index] = false
        setPrevButIndex(new_prev_but_index)
    }

    const prependCart = (index) => {
        let new_carts_index = [...carts_index];
        new_carts_index[index] -= 1
        setCartsIndex(new_carts_index)

        if (new_carts_index[index] == 1) {
            let new_prev_but_index = [...prev_but_index];
            new_prev_but_index[index] = true
            setPrevButIndex(new_prev_but_index)
        }
    }


    const removeItemCart = () => {
        setCarts(
            carts.filter((_, index) => index !== acttiveCartIndex)
        )
        setCartsIndex(
            carts_index.filter((_, index) => index !== acttiveCartIndex)
        )
        window.localStorage.setItem("cart", JSON.stringify(
            carts.filter((_, index) => index !== acttiveCartIndex)
        ));
        toggleModalClose()
    }

    const placeOrder = () => {
        window.localStorage.setItem("tracker", 
            JSON.stringify(
                {
                    carts_index: carts_index,
                    carts: carts
                }
            )
        );
        localStorage.removeItem("cart");
        window.location.href = "/tracker";

    }

    if (carts.length == 0) {
        checkCart = (
            <div class="text-center m-6 margin-no-cart">
                <MDBIcon className="text-dark fa-3x mx-3" fas icon="cart-shopping" /> 
                <center><h3 class="text-secondary">YOUR CART IS EMPTY</h3>
                <a href="/products"><button className='cart-btn'>SHOP NOW!</button></a>
                </center>

            </div>
        )
    }
    return(
        <div className='cart-page'>
            <Header/>
            <div class='container-fluid pt-5'>
                <Modal isOpen={modal} toggle={toggleModalClose}>
                    <ModalHeader toggle={toggleModalClose}>Are you sure you want to delete this?</ModalHeader>
                    <ModalFooter>
                        <Button className="mx-3" color="secondary" onClick={toggleModalClose}>
                                Cancel
                            </Button>
                            <Button color="danger" onClick={removeItemCart}>
                                Yes
                            </Button>
                    </ModalFooter>
                </Modal>
                
                <div>
                    <div class='row'>
                        <h1 class={carts.length == 0 ? "d-none" : "pt-5"}>My Cart 
                            <MDBIcon className="text-dark fa-1x mx-3" fas icon="cart-shopping" /> 
                        </h1>
                        {checkCart}
                        <div class="col-md-9">
                            {
                                carts.map(
                                    (cart, index) => 
                                    <div class="row p-4 bg-white mx-1 my-3 added-item-container">
                                        <div class="col-md-2 text-center">
                                            <img class="img-fluid" src={cart.img}/>
                                        </div>
                                        <div class={`${cart.service_type  == "product" ? "col-md-4" : "col-md-5"} pt-3`}>
                                            <h2>{cart.title} {cart.name ? <span className='text-secondary h5'>({cart.name})</span> : ""}</h2>
                                            {
                                                cart.service_type == "subscription" ?
                                                <span class="badge rounded-pill bg-success p-2 my-2 badge_width">{cart.service_type}</span>
                                                :
                                                ""
                                            }

                                            {
                                                cart.service_type == "subscription" && cart.type == "basic" ?
                                                <span class="badge rounded-pill bg-secondary p-2 mx-1 my-2 badge_width">Basic</span>
                                                :
                                                ""
                                            }

                                            {
                                                cart.service_type == "subscription" && cart.type == "premium" ?
                                                <span class="badge rounded-pill bg-warning p-2 my-2 mx-1 badge_width">Premium</span>
                                                :
                                                ""
                                            }
                                            
                                            <p>{cart.description}</p>
                                        </div>
                                        <div class={`${cart.service_type  == "product" ? "col-md-2" : "col-md-4"}  text-center mt-4 pt-5`}>
                                            <h5><b>
                                                {
                                                    cart.service_type == "subscription" ?
                                                    `₱ ${cart.price} / Month`
                                                    :
                                                    `₱ ${cart.price}`
                                                }
                                            </b></h5>
                                           
                                        </div>
                                        {
                                            cart.service_type  == "product" ?
                                                <div class="col-md-3 text-center mt-4 pt-5">
                                                    <div class="input-group justify-content-center">
                                                        <span class="input-group-btn">
                                                            <button disabled={prev_but_index[index]} type="button" onClick={prependCart.bind(this, index)} class="btn btn-primary">
                                                                <MDBIcon fas icon="minus" />
                                                            </button>
                                                        </span>
                                                        <div class="text-center px-2 p-1">
                                                            <b>{carts_index[index]}</b>
                                                        </div>
                                                        <span class="input-group-btn">
                                                            <button type="button" onClick={appendCart.bind(this, index)} class="btn btn-primary">
                                                                <MDBIcon fas icon="plus" />
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                                : ""
                                        }
                                        <div class="col-md-1 text-center mt-4 pt-5">
                                            <button class="btn btn-danger" onClick={toggleModalOpen.bind(this, index)}>
                                                <span className="text-light">
                                                    <MDBIcon fas icon="trash" />
                                                </span>
                                            </button>
                                        </div>
                                       
                                    </div>
                                )
                            }
                        </div>
                        <div class={carts.length == 0 ? "d-none" : "col-md-3"}>
                            <div class="bg-white p-5 mt-3 cart-detail-container">
                                <div>
                                    <h4>Order Summary</h4>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <p>Subtotal ({carts_index.reduce((sum, cart, _) => sum + cart, 0)} items)</p>
                                        </div>
                                        <div class="col-md-6">
                                            <span>₱ {carts.reduce((sum, cart, index) => sum + cart.price *  carts_index[index], 0) }</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <p>Shipping Details</p>
                                        </div>
                                        <div class="col-md-6">
                                            <span>₱ {shipping_fee}</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <p>Total</p>
                                        </div>
                                        <div class="col-md-6">
                                            <span>₱ {carts.reduce((sum, cart, index) => sum + cart.price * carts_index[index], 0) + shipping_fee }</span>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div>
                                    <h4>Shipping details</h4>
                                    <p>{user_sessions.name} ({user_sessions.billing_information.gcash})</p>
                                    <p>{user_sessions.shipping_information.address}</p>
                                </div>
                                <hr/>
                                <div>
                                    <h4>Payment Method</h4>
                                    <div class="form-check p-3">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"checked/>
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Gcash
                                        </label>
                                    </div>
                                    <div class="form-check p-3">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Mastercard
                                        </label>
                                    </div>
                                    <div class="form-check p-3">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Cash On Delivery
                                        </label>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-infoo" onClick={placeOrder.bind(this)}>Place Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Carts;
