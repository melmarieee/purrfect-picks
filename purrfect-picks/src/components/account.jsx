import '../css/account.css'
import Header from './common/header'
import Footer from './common/footer'
import { useState } from 'react'
import kaori from '../assets/kaori.jpg'

const Account = () => {
    const [enableInputProfile, setInput] = useState(true)
    const [showButtonInfo, setshowButtonInfo] = useState("")
    const [enableInputBill, setInputBill] = useState(true)
    const [showButtonInfoBill, setButtonInfoBill] = useState("")
    const [enableShipping, setShipping] = useState(true)
    const [showButtonShipping, setButtonShipping] = useState("")

    
    let changeInfo = () => {
        setInput(!enableInputProfile)

        setshowButtonInfo(
            <button onClick={disableInput} className='submit1-info px-2 py-1'>Submit</button>
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
            <button onClick={disableInfoBill} className='submit1-info px-2 py-1'>Submit</button>
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
            <button onClick={disableShipping} className='submit1-info px-2 py-1'>Submit</button>
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
                      <div className="account-info p-3 bg-white">
                        <h4 className='text-center'>Profile Information</h4>
                        <div className="edit-info">
                            <span><u onClick={changeInfo}>Edit</u></span>
                        </div>
                        <form action="">
                            <label for="exampleInputName" class="form-label">Purr Parent Name:</label>
                            <br/>
                            <input type="text" disabled={enableInputProfile} class="form-control" id="exampleInputName"/>
                            <br />
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" disabled={enableInputProfile} class="form-control" id="exampleInputEmail1"/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

                            <label for="exampleInputName" class="form-label">Age:</label>
                            <input type="text" disabled={enableInputProfile} class="form-control" id="exampleInputName"/>
                        </form>
                        <div className='submit-info p-3'>
                            {showButtonInfo}
                        </div>
                      </div>
                   </div>
                   <div className='col-md-4'>
                        <div className='account-info p-3  bg-white'>
                            <h4 className='text-center'>Billing Information</h4>
                                <div className="edit-info">
                                    <span><u onClick={changeInfoBill}>Edit</u></span>
                                </div>
                            <form action="">
                                <div>
                                    <label for="exampleInputEmail1" class="form-label">Address</label>
                                    <input type="text" disabled={enableInputBill} class="form-control" id="exampleInputEmail1"/>
                                    <br />
                                    <select disabled={enableInputBill} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                        <option selected>Philippines</option>
                                    </select>

                                </div>
                            </form>
                            <div className='submit-info p-3'>
                                 {showButtonInfoBill}
                            </div>
                        </div> 
                   </div>
                   <div className='col-md-4'>
                        <div className='account-info p-3  bg-white'>
                                <h4 className='text-center'>Shipping Information</h4>
                                    <div className="edit-info">
                                        <span><u onClick={changeShipping}>Edit</u></span>
                                    </div>
                            <form action="">
                                    <label for="exampleInputName" class="form-label">Full Name</label>
                                    <input type="text" disabled={enableShipping} class="form-control" id="exampleInputName"/>

                                    <label for="exampleInputEmail1" class="form-label">Address</label>
                                    <input type="email" disabled={enableShipping} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    
                                    <label for="exampleInputNumber" class="form-label">Contact Number</label>
                                    <input type="number" disabled={enableShipping} class="form-control" id="exampleInputNumber"/>

                                    <label for="exampleInputZip" class="form-label">Zip Code</label>
                                    <input type="number" disabled={enableShipping} class="form-control" id="exampleInputZip"/>
                            </form>
                            <div className='submit-info p-3'>
                                {showButtonShipping}
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <h3 class="px-5">My Pets</h3>
            <hr class="m-5"/>
            <div className='container-fluid px-5'>
                <div class="row">
                    <div class="card col-md-3">
                        <img class="card-img-top" src={kaori} alt="Card image cap"/>
                        <div class="card-body">
                            <h3 class="card-title">Kaori</h3>
                            <p>Breed: Shihtzu</p>
                            <p>Age: 3</p>
                            <p>We ight(kg): 8KG</p>
                            <button href="#" class="btn buttonsubmit">Details</button>
                            <h5><b>Vaccination Certificate</b></h5>
{/* <div className='table-container'>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">Date</th>
            <th scope="col">Vaccine</th>
            <th scope="col">Product Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>03/23/22</td>
            <td>Deworm</td>
            <td>Benzimidazoles</td>
            </tr>
            <tr>
            <td>04/11/22</td>
            <td>Rabbies</td>
            <td>Rabisin</td>
            </tr>
            <tr>
            <td>08/19/23</td>
            <td>Bordetella</td>
            <td>Vanguard B</td>
            </tr>
        </tbody>
    </table>
</div>   */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Account;
