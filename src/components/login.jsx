import '../css/login.css'

import Footer from './common/footer'
import purfectlogo from '../assets/purfectLogo.png'
import sixtoh from '../assets/sixtoh.jpeg'
import kendra from '../assets/kendra.jpeg'
import kaori from '../assets/kaori.jpg'
import right_image from '../assets/login_bg.png'


import { useState } from 'react'

const users = [
    {
        name: "Mel Marie Luya",
        email: "melmarieeee@gmail.com",
        password: "12345",
        age: 21,
        billing_information: {
            gcash: "09190093705"
        },
        shipping_information: {
            address: "112 Villareal Gulod, Novaliches Quezon City",
            zip_code: 1600,
            number: "09190093705"
        },
        pets: [
            {
                name: "Stella",
                age: 2,
                breed: "Shitzu",
                weight: "8kg",
                img: sixtoh,
                subscriptions: [
                    "SD BASIC",
                    "SD PREMIUM"
                ]
            },
            {
                name: "Miyo",
                age: 1,
                img: kaori,
                breed: "K9",
                weight: "30kg",
                subscriptions: [
                    "LG DOG"
                ]
            }
        ]
    },
    {
        name: "Peter John Reyes",
        email: "peterjohn@gmail.com",
        password: "123456",
        age: 23,
        billing_information: {
            gcash: "09208983562"
        },
        shipping_information: {
            address: "Brgy. IV, Mataasnakahoy Batangas",
            zip_code: 4223,
            number: "09208983562"
        },
        pets: [
            {
                name: "Kaori",
                age: 2,
                breed: "Shitzu",
                weight: "7kg",
                img: kaori,
                subscriptions: [
                    "SD BASIC"
                ]
            },
            {
                name: "Sixtoh",
                age: 4,
                breed: "Shitzu",
                weight: "6.7kg",
                img: sixtoh,
                subscriptions: [
                    "SD BASIC"
                ]
            },
            {
                name: "Kendra",
                age: 6,
                breed: "Shitzu",
                weight: "6.4kg",
                img: kendra,
                subscriptions: [
                    "SD BASIC"
                ]
            }
        ]
    }
]

const Login = () => {
    const [showError, setshowError] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = (event) => {
        let user_login = {}
        let login_success = false

        users.map(
            (user) => {
                if(user.email == email && user.password == password) {
                    user_login = user;
                    login_success = true;
                }
            }
        )

        if (login_success) {
            window.localStorage.setItem("user", JSON.stringify(user_login));
            window.location.href = "/";
            event.preventDefault();
            return;
        } else {
            setshowError(<p class="text-danger">Incorrect username password</p>)
            event.preventDefault();
        }
        
    }

    const changeEmail = (event) => {
        setEmail(event.target.value)
    }

    const changePassword = (event) => {
        setPassword(event.target.value)
    }


    return(
<>
    <div className="login-page">
        <div className="login-container">
            <div className="login-form-container pt-3">

                <div className="purrpicks-logo-container my-5">
                    <a href="/"><img src={purfectlogo} alt="purrfect-picks-logo" className="purrfectpicks-logo img-fluid"/></a>
                </div>

                <form onSubmit={handleSubmit} className="form-section" validate>
                    <div className='form-header'>
                        <h1><b>Welcome Back Hooman!</b></h1>
                        <p className="form-header-instruction text-secondary mb-3">Please enter your details</p>
                    </div>
                    <div className='login-input-container'>
                        <label for="validationCustomUsername" className="login-label py-2"><b>Email</b></label>
                        <input onChange={changeEmail.bind(this)} type="text" className="login-input form-control py-2" id="validationCustomUsername" 
                        placeholder='yourname@gmail.com'
                        aria-describedby="inputGroupPrepend" required/>
                    </div>
                    <br/>
                    <div  className='login-input-container pb-2'>
                        <label for="validationCustom04" className="login-label"><b>Password</b></label>
                        <input onChange={changePassword.bind(this)} type="password" className="login-input form-control py-2" placeholder="input your assword"/>
                    </div>
                    <div>
                    <div className="login-input-checkbox-container">
                        <input className="login-checkbox text-secondary" type="checkbox" value="" id="invalidCheck" placeholder="please enter your password"/>
                        <label className="login-checkbox-label" for="invalidCheck">Remember me</label>
                    </div>
                    </div>
                    <div className='login-button-container'>
                        {showError}
                        <button className="login-submit-button" type="submit">Log in</button>
                    </div>
                </form>
                <div className="login-to-signup-container">
                    <span>Don't have an account? <a href="/signup">Sign Up</a></span>
                </div>
            </div>

            {/* <div class="height-hero-container"> */}
                <div className="login-hero-container">
                    <img src={right_image} className='img-fluid image_dog'/>
                </div>
            {/* </div> */}
        </div>
    </div>
</>
    )
}

export default Login;