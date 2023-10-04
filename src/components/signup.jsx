import '../css/signup.css'
import purfectlogo from '../assets/purfectLogoWhite.png'
import right_image from '../assets/image_right.png'


const Signup = () => {
    return(
        <div>
            <div className="container-fluid signup pt-5">
                <div className="row">
                    <div class="col-md-5 image-left-container bottom-pic-container">
                        <div className="text-center pt-5 signup-image-container">
                            <a href="/"><img src={purfectlogo} alt="purrfect-picks-logo" width="30%"/></a>
                            <img src={right_image} alt="logo" className="img-fluid bot-pic-rotate signup-img" width="100%"/>
                        </div>
                    </div>
                    <div className="col-md-7 padding_form mt-3">
                        <div className="d-flex justify-content-end mt-5 signin-now-container">
                            <small className="text-muted px-3 mt-1">Already have an account? </small>
                            <a href="/login"><button type="button" className="btn btn-sm rounded sign-in-btn">Sign In</button></a>

                        </div>
                        <form action="/login" className="row g-3 p-3 signup-form-container" validate>
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