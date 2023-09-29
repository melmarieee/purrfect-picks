import React, { useState, useEffect } from 'react';
import '../css/account.css'
import Header from './common/header'
import Footer from './common/footer'
import dogFood from '../assets/dogFood.png'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Carts = (props) => {
    const [carts, setCarts] = useState(props.carts);
    const [acttiveCartIndex, setActiveCartIndex] = useState(0);
    const [carts_index, setCartsIndex] = useState(
        carts.map((_) => 1)
    );
    const [prev_but_index, setPrevButIndex] = useState(
        carts.map((_) => true)
    );
    let checkCart = ""
    

    const [modal, setModal] = useState(false);

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
        toggleModalClose()
    }
    if (carts.length == 0) {
        checkCart = (
            <div class="text-center m-5">
                <h3 class="text-secondary">There are no items in this cart</h3>
            </div>
        )
    }
    return(
        <div>
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
                <h1 class="pt-5">Cart 🛒</h1>
                <div>
                    <div class='row'>
                        {checkCart}
                        <div class="col-md-9">
                            {
                                carts.map(
                                    (cart, index) => 
                                    <div class="row p-4 bg-white mx-1 my-3">
                                        <div class="col-md-2 text-center">
                                            <img class="img-fluid" src={cart.image_src}/>
                                        </div>
                                        <div class="col-md-5 pt-3">
                                            <h2>{cart.name}</h2>
                                            <p>{cart.description}</p>
                                        </div>
                                        <div class="col-md-2 text-center pt-5">
                                            <h5><b>₱ {cart.price}</b></h5>
                                            <button class="btn btn-danger" onClick={toggleModalOpen.bind(this, index)}>Remove</button>
                                        </div>
                                        <div class="col-md-3 text-center pt-5">
                                            <div class="input-group justify-content-center">
                                                <span class="input-group-btn">
                                                    <button disabled={prev_but_index[index]} type="button" onClick={prependCart.bind(this, index)} class="btn btn-primary">-</button>
                                                </span>
                                                <div class="text-center px-2 p-1">
                                                    <b>{carts_index[index]}</b>
                                                </div>
                                                <span class="input-group-btn">
                                                    <button type="button" onClick={appendCart.bind(this, index)} class="btn btn-primary">+</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div class={carts.length == 0 ? "d-none" : "col-md-3"}>
                            <div class="bg-white p-5 mt-3">
                                <div>
                                    <h4>Order Summary</h4>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <p>Subtotal ({carts.length} items)</p>
                                        </div>
                                        <div class="col-md-6">
                                            <span>₱ 944.37</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <p>Shipping Details</p>
                                        </div>
                                        <div class="col-md-6">
                                            <span>₱ 60</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <p>Total</p>
                                        </div>
                                        <div class="col-md-6">
                                            <span>₱ 1044.67</span>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div>
                                    <h4>Shipping details</h4>
                                    <p>Mel Marie Luya (09190093704)</p>
                                    <p>Lot 1 Blk 35 Boppard St Mercedez Execcutive Village Pasig City Philippines</p>
                                </div>
                                <hr/>
                                <div>
                                    <h4>Payment Method</h4>
                                    <div class="form-check p-3">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
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
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Cash On Delivery
                                        </label>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-primary">Place Order Now</button>
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
