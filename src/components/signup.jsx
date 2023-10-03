import '../css/signup.css'
import purfectlogo from '../assets/purfectLogo.png'

import Footer from './common/footer'


const Signup = () => {
    return(
        <div className='signup-body'>
            <div className="signup-page">
                <div className="signup-container">
                    <div className="signup-hero-container"></div>

                    <div className="signup-form-container">
                        
                        <div className="purrpicks-logo-container">
                            <a href="/"><img src={purfectlogo} alt="purrfect-picks-logo" className="purrfectpicks-logo"/></a>
                        </div>

                        <form action="/login" className="form-section" validate>
                            <div className="signup-header-container">
                                <h2 className="signup-header"><b>Welcome Hooman!</b></h2>
                                <small>Register your account</small>
                            </div>
                            <div className="signup-input-container">
                                <label for="name" className=""><b>Purr Parent Name</b></label>
                            <input type="text" className="signup-input" id="name" placeholder="e.g., Ian Prince" required/>
                            </div>
                            <div className="signup-input-container">
                            <label for="email" className=""><b>Email</b></label>
                            <input type="text" className="signup-input" id="email" placeholder="examplename@gmail.com" required/>
                            </div>
                            <div className="signup-input-container">
                            <label for="number" className=""><b>Number</b></label>
                            <input type="number" className="signup-input" id="number" placeholder="e.g., +63 999-8229-286" required/>
                            </div>
                            <div className="signup-input-container">
                            <label for="password" className=""><b>Password</b></label>
                            <input type="password" className="signup-input" id="password" placeholder="Create Password" required/>
                            </div>
                            <div className="signup-input-container">
                            <label for="password-c" className=""><b>Confirm Password</b></label>
                            <input type="password" className="signup-input" id="password-c" placeholder="Confirm Password" required/>
                            </div>
                            <div className="login-button-container">
                            <button className="login-submit-button" type="submit">Sign up</button>
                            <small className="">Already have an account? </small>
                            <a href="/login">Sign In</a>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default Signup;