import '../css/signup.css'
import purfectlogo from '../assets/purfectLogoWhite.png'
import signupBG from '../assets/sign-upBG.png'


const Signup = () => {
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div class="col-md-6 image-left-container bottom-pic-container">
                        <div className="text-center pt-5">
                            <img src={purfectlogo} alt="purrfect-picks-logo" width="30%"/>
                            <img src={signupBG} alt="logo" className="img-fluid bot-pic-rotate" width="100%"/>
                        </div>
                    </div>
                    <div className="col-md-6 px-5">
                        <div className="d-flex justify-content-end mt-5">
                            <small className="text-muted px-3 mt-1">Already have an account? </small>
                            <button type="button" className="btn btn-outline-secondary btn-sm rounded">Sign In</button>
                        </div>
                        <form action="/index.html" className="row g-3 p-4" validate>
                            <div className="mb-3">
                                <h2 className="h2"><b>Welcome Hooman!</b></h2>
                                <small className="text-muted">Register your account</small>
                            </div>
                            <div className="py-1">
                                <label for="name" className="form-label"><b>Purr Parent Name</b></label>
                            <input type="text" className="form-control input-container rounded-3" id="name" placeholder="e.g., Ian Prince" required/>
                            </div>
                            <div className="py-1">
                            <label for="email" className="form-label"><b>Email</b></label>
                            <input type="text" className="form-control rounded-3" id="email" placeholder="examplename@gmail.com" required/>
                            </div>
                            <div className="py-1">
                            <label for="number" className="form-label"><b>Number</b></label>
                            <input type="number" className="form-control rounded-3" id="number" placeholder="e.g., +63 999-8229-286" required/>
                            </div>
                            <div className="py-1">
                            <label for="password" className="form-label"><b>Password</b></label>
                            <input type="password" className="form-control rounded-3" id="password" placeholder="Create Password" required/>
                            </div>
                            <div className="py-1">
                            <label for="password-c" className="form-label"><b>Confirm Password</b></label>
                            <input type="password" className="form-control rounded-3" id="password-c" placeholder="Confirm Password" required/>
                            </div>
                            <div className="mt-4">
                            <button className="btn btn-primary buttonsubmit btn-lg" type="submit">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;