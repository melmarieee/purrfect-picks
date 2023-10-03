import '../css/account.css'
import Header from './common/header'
import Footer from './common/footer'
import { useState } from 'react'
import kaori from '../assets/kaori.jpg'
import Gcash from '../assets/Gcash.jpg'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Col, Row } from 'reactstrap';





const Account = () => {
    const user_session = window.localStorage.getItem("user");

    const [enableInputProfile, setInput] = useState(true)
    const [showButtonInfo, setshowButtonInfo] = useState("")
    const [enableInputBill, setInputBill] = useState(true)
    const [showButtonInfoBill, setButtonInfoBill] = useState("")
    const [enableShipping, setShipping] = useState(true)
    const [showButtonShipping, setButtonShipping] = useState("")
    const [user, setUser] = useState(JSON.parse(user_session))
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
 


    let changeInfo = () => {
        setInput(!enableInputProfile)

        setshowButtonInfo(
            <button onClick={disableInput} className='submit1-info text-white px-2 py-1'>Submit</button>
        )
        if (!enableInputProfile){
            setshowButtonInfo("")
        }
    }
    let disableInput = () => {
        setInput(true)
        setshowButtonInfo(true)
        setshowButtonInfo("")
    }

    let  changeInfoBill = () => {
        setInputBill(!enableInputBill)

        setButtonInfoBill (
            <button onClick={disableInfoBill} className='submit1-info text-white px-2 py-1'>Submit</button>
        )
        if (!enableInputBill){
            setButtonInfoBill("")
        }
    }
    let disableInfoBill= () => {
        setInputBill(true)
        setButtonInfoBill(true)
        setButtonInfoBill("")
    }
    let  changeShipping = () => {
        setShipping(!enableShipping)

        setButtonShipping (
            <button onClick={disableShipping} className='submit1-info text-white px-2 py-1'>Submit</button>
        )

        if(!enableShipping){
            setButtonShipping("")
        }

    }
    let disableShipping  = () => {
        setShipping(true)
        setButtonShipping(true)
        setButtonShipping("")
    }
    return(
        <div>
            <Header/>
            <div class='container-fluid pt-5'>
                <h3 class="px-4 pt-5">Manage my account</h3>
                <hr class="m-4"/>
                <div class='row px-4'>
                   <div className='col-md-4'>
                      <div className="account-info p-3 bg-white account-container">
                        <h4 className='text-center'>Profile Information</h4>
                        <div className="edit-info">
                            <span><u onClick={changeInfo}>Edit</u></span>
                        </div>
                        <form action="">
                            <label for="exampleInputName" class="form-label">Purr Parent Name:</label>
                            <br/>
                            <input defaultValue={user.name} type="text" disabled={enableInputProfile} class="form-control" id="exampleInputName"/>
                            <br />
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input defaultValue={user.email} type="email" disabled={enableInputProfile} class="form-control" id="exampleInputEmail1"/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

                            <label for="exampleInputName" class="form-label">Age:</label>
                            <input defaultValue={user.age} type="text" disabled={enableInputProfile} class="form-control" id="exampleInputName"/>
                        </form>
                        <div className='submit-info p-3'>
                            {showButtonInfo}
                        </div>
                      </div>
                   </div>
                   <div className='col-md-4'>
                        <div className='account-info p-3  bg-white account-container'>
                            <h4 className='text-center'>Billing Information</h4>
                                <div className="edit-info">
                                    <span><u onClick={changeInfoBill}>Edit</u></span>
                                </div>
                                <form action="">
                                    <div>
                                        <label for="exampleInputEmail1" class="form-label">Gcash number</label>
                                        <br />
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-2'>
                                            <img src={Gcash} alt="avatar" className="img-fluid mx-2" />
                                        </div>
                                        <div className='col-md-10'>
                                            <input defaultValue={user.billing_information.gcash} type="text" disabled={enableInputBill} class="form-control p-1" id="exampleInputEmail1"/>
                                        </div>
                                    </div>
                                </form>
                            <div className='submit-info p-3'>
                                 {showButtonInfoBill}
                            </div>
                        </div> 
                   </div>
                   <div className='col-md-4'>
                        <div className='account-info p-3  bg-white account-container'>
                                <h4 className='text-center'>Shipping Information</h4>
                                    <div className="edit-info">
                                        <span><u onClick={changeShipping}>Edit</u></span>
                                    </div>
                            <form action="">
                                    <label for="exampleInputEmail1" class="form-label">Address</label>
                                    <input defaultValue={user.shipping_information.address} type="email" disabled={enableShipping} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    
                                    <br />

                                    <label for="exampleInputNumber" class="form-label">Contact Number</label>
                                    <input defaultValue={user.shipping_information.number} type="number" disabled={enableShipping} class="form-control" id="exampleInputNumber"/>
                                    
                                    <br />
                                    <label for="exampleInputZip" class="form-label">Zip Code</label>
                                    <input defaultValue={user.shipping_information.zip_code} type="number" disabled={enableShipping} class="form-control" id="exampleInputZip"/>
                            </form>
                            <div className='submit-info p-3'>
                                {showButtonShipping}
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <h3 class="px-5 p-3">My Pets</h3>
            <hr class="m-5"/>
            <div className='container-fluid px-5 py-2'>
                <div class="row">
                    {
                    user.pets.map(
                        (pet, _) => 
                        <div class="card col-md-3">
                            <img class="card-img-top" src={kaori} alt="Card image cap"/>
                            <div class="card-body">
                                <h3 class="card-title">{pet.name}</h3>
                                <p>Breed: Shihtzu</p>
                                <p>Age: {pet.age}</p>
                                <p>Weight (KG): {pet.weight}</p>
                                <h4>Subscriptions</h4>
                                {/* <span class="badge rounded-pill bg-secondary p-2 mx-1 my-2 badge_width">SD Basic</span> */}
                                <span class="badge rounded-pill bg-warning p-2 mx-1 my-2 badge_width">SD PREMIUM</span>
                            </div>
                        </div>
                    )
                    }
                </div>
                <div className='p-3'>
                    <Button color="danger" onClick={toggle}>
                            + Add Pet
                    </Button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Pet Information</ModalHeader>
                            <ModalBody className=''>
                                <form action="">
                                    <FormGroup>
                                        <Row>
                                            <Col sm={3}>
                                                <label for="exampleInputName" class="form-label">Pet Name:</label>
                                            </Col>
                                            <br/>
                                            <Col sm={9}>
                                            <input  type="text" class="form-control addPet-info" id="exampleInputName"/>
                                            </Col>
                                        </Row> 
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={3}>
                                                <label for="exampleInputBreed" class="form-label">Breed:</label>
                                            </Col>
                                            <br/>
                                            <Col sm={9}>
                                            <input  type="text" class="form-control addPet-info" id="exampleInputBreed"/>
                                            </Col>
                                        </Row> 
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={3}>
                                                <label for="exampleInputAge" class="form-label ">Age:</label>
                                            </Col>
                                            <br/>
                                            <Col sm={9}>
                                            <input  type="text" class="form-control addPet-info" id="exampleInputAge"/>
                                            </Col>
                                        </Row> 
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={3}>
                                                <label for="exampleInpuWeight" class="form-label">Weight:</label>
                                            </Col>
                                            <br/>
                                            <Col sm={9}>
                                            <input  type="text" class="form-control addPet-info" id="exampleInputWeight"/>
                                            </Col>
                                        </Row> 
                                    </FormGroup>
                                </form>
                            </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={toggle}>
                                Submit
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Account;

