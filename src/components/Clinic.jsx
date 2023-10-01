import Header from './common/header'
import '../css/chatbot.css'
import Footer from './common/footer'
import Logo from '../assets/logoClinic.png'
import React from "react";
import dogoLogo from '../assets/dogoLogo.png'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBTextArea,
  MDBCardHeader,
} from "mdb-react-ui-kit";

export default function Clinic() {
  return (
    <div>
        <Header/>
        <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
            <MDBRow>
                <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
                    <h5 className="font-weight-bold mb-3 text-center text-lg-start">
                        Member
                    </h5>
            <MDBCard>
                <MDBCardBody>
                <MDBTypography listUnStyled className="mb-0">
                    <li className="p-2 border-bottom recent-info">
                        <a href="#!" className="d-flex justify-content-between">
                            <div className="d-flex flex-row">
                                <img
                                    src={dogoLogo}
                                    alt="avatar"
                                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                    width="60"/>
                                <div className="pt-1">
                                    <p className="fw-bold mb-0">Dogo Bot</p>
                                    <p className="small text-muted">Hello, how can i help you 😀?</p>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="small text-muted mb-1">Just now</p>
                                <span className=" text-muted float-end mx-2">
                                    <MDBIcon fas icon="check" />
                                </span>
                            </div>
                        </a>
                    </li>
                    <li className="p-2 border-bottom recent-info">
                        <a href="#!" className="d-flex justify-content-between">
                        <div className="d-flex flex-row">
                            <img
                                src={Logo}
                                alt="ClinicAvatar"
                                className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                width="60"
                            />
                            <div className="pt-1">
                                <p className="fw-bold mb-0">PurrPicks Clinic</p>
                                <p className="small text-muted">Today is your pet schedule.</p>
                            </div>
                        </div>
                        <div className="pt-1">
                            <p className="small text-muted mb-1">5 mins ago</p>
                            <span className="text-muted float-end mx-2">
                                <MDBIcon fas icon="check" />
                            </span>
                        </div>
                        </a>
                    </li>
                    
                </MDBTypography>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol md="6" lg="7" xl="8">
            <MDBTypography listUnStyled>
                <li className="d-flex justify-content-between mb-4">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                    width="60"
                />
                <MDBCard>
                    <MDBCardHeader className="d-flex justify-content-between p-3">
                    <p className="fw-bold mb-0">Brad Pitt</p>
                    <p className="text-muted small mb-0">
                        <MDBIcon far icon="clock" /> 12 mins ago
                    </p>
                    </MDBCardHeader>
                    <MDBCardBody>
                    <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </p>
                    </MDBCardBody>
                </MDBCard>
                </li>
                <li class="d-flex justify-content-between mb-4">
                <MDBCard className="w-100">
                    <MDBCardHeader className="d-flex justify-content-between p-3">
                    <p class="fw-bold mb-0">Lara Croft</p>
                    <p class="text-muted small mb-0">
                        <MDBIcon far icon="clock" /> 13 mins ago
                    </p>
                    </MDBCardHeader>
                    <MDBCardBody>
                    <p className="mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium.
                    </p>
                    </MDBCardBody>
                </MDBCard>
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                    width="60"
                />
                </li>
                <li className="d-flex justify-content-between mb-4">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                    width="60"
                />
                <MDBCard>
                    <MDBCardHeader className="d-flex justify-content-between p-2 response-info">
                    <p className="fw-bold mb-0">Brad Pitt</p>
                    <p className="text-muted small mb-0">
                        <MDBIcon far icon="clock" /> 10 mins ago
                    </p>
                    </MDBCardHeader>
                    <MDBCardBody>
                    <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </p>
                    </MDBCardBody>
                </MDBCard>
                </li>
                <li className="bg-white mb-3 response-info p-2 mx-2">
                <MDBTextArea label="Message" id="textAreaExample" rows={4} />
                </li>
                <MDBBtn className="float-end button-container">
                Send
                </MDBBtn>
            </MDBTypography>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
        <Footer/>
    </div>
  );
}