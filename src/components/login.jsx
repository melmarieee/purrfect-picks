import '../css/login.css'
import purfectlogo from '../assets/purfectLogo.png'
import loginBG from '../assets/login-bg.png'

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
                weight: "8",
                img: null,
                subscriptions: [
                    "SD BASIC",
                    "SD PREMIUM"
                ]
            },
            {
                name: "Miyo",
                age: 1,
                img: null,
                breed: "K9",
                weight: "30",
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
                weight: "7",
                img: null,
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
    <div class="container-fluid logIn">
            <div class="row">
                <div class="col-md-6">
                    <div class="login-form-contaniner">
                        <form onSubmit={handleSubmit} class="row g-3 needs-validation" validate>
                            <div class="text-center">
                                <a href="/"><img src={purfectlogo} alt="purrfect-picks-logo" width="40%" class="pb-5 img-fluid"/></a>
                            </div>
                            <div className='login-heading'>
                                <h1><b>Welcome Back Hooman!</b></h1>
                                <p class="enter-details-font">Please enter your details</p>
                            </div>
                            <div className='input-container'>
                                <label for="validationCustomUsername" class="form-label mx-2"><b>Email or Phone number</b></label>
                                <input onChange={changeEmail.bind(this)} type="text" class="form-control" id="validationCustomUsername" 
                                placeholder='yourname@gmail.com'
                                aria-describedby="inputGroupPrepend" required/>
                            </div>
                            <br/>
                            <div  className='input-container'>
                                <label for="validationCustom04" class="form-label mx-2"><b>Password</b></label>
                                <input onChange={changePassword.bind(this)} type="password" class="form-control" placeholder="input your assword"/>
                            </div>
                            <div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" placeholder="please enter your password"/>
                                <label class="form-check-label" for="invalidCheck">
                                    Remember me
                                </label>
                            </div>
                            </div>
                            <div className='lg-btn-container'>
                                {showError}
                                <button class="btn btn-secondary buttonsubmit mt-2 btn-lg" type="submit">Log in</button>
                            </div>
                        </form><br/>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-left pb-4 signup-option">
                            <span>Don't have an account? <a href="/signup"> Signup</a></span>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-6 image-login">
                    <img src={loginBG} alt="logo" class="img-fluid login-bg-container bot-pic-rotate"/>
                    </div>
                </div>
            </div>
    )
}

export default Login;