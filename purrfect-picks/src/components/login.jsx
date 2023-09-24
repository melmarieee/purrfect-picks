import '../css/login.css'
import purfectlogo from '../assets/purfectLogo.png'
import loginBG from '../assets/login-bg.png'


const Login = () => {
    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <div class="login-form-contaniner">
                        <form action="/home.html" class="row g-3 needs-validation" validate>
                            <div class="text-center">
                                <img src={purfectlogo} alt="purrfect-picks-logo" width="55%" class="pb-5 img-fluid"/>
                            </div>
                            <div>
                                <h1><b>Welcome Back Hooman!</b></h1>
                                <p class="enter-details-font">Please enter your details</p>
                            </div>
                            <div>
                                <label for="validationCustomUsername" class="form-label mx-2"><b>Email or Phone number</b></label>
                                <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" value="melmarieeee@gmail.com" required/>
                            </div>
                            <br/>
                            <div>
                                <label for="validationCustom04" class="form-label mx-2"><b>Password</b></label>
                                <input type="password" class="form-control" placeholder="Password"/>
                            </div>
                            <div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" placeholder="please enter your password"/>
                                <label class="form-check-label" for="invalidCheck">
                                    Remember me
                                </label>
                            </div>
                            </div>
                            <div>
                                <button class="btn btn-primary buttonsubmit mt-2 btn-lg" type="submit">Log in</button>
                            </div>
                        </form>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center pb-4">
                            <span>Don't have an account? <a href="/signup.html"> Signup</a></span>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-6 image-login">
                    <img src={loginBG} alt="logo" class="img-fluid login-bg-container bot-pic-rotate pt-5"/>
                    </div>
                </div>
        </div>
    )
}

export default Login;