import '../css/tracker.css'
import Header from './common/header'
import Footer from './common/footer'

import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBProgress,
    MDBProgressBar,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
  import React, {useState} from 'react';
  
function Tracker() {
  const [trackings, setTrackings] = useState(
    JSON.parse(window.localStorage.getItem("tracker"))
  );

    return (
      <>
     <Header/>
        <section
          className="h-100"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="10" xl="8">
                <MDBCard style={{ borderRadius: "10px" }}>
                  <MDBCardHeader className="px-4 py-5">
                    <MDBTypography tag="h5" className="text-muted mb-0">
                      Thanks for your Order,{" "}
                      <span style={{ color: "#952322" }}>Hooman</span>!
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p
                        className="lead fw-normal mb-0"
                        style={{ color: "Black" }}
                      >
                        Order
                      </p>
                      <p className="small text-muted mb-0">
                        Receipt Voucher : 1KAU9-84UIL
                      </p>
                    </div>
                    {
                      trackings.carts.map(
                          (track, index) => 
                          <MDBCard className="shadow-0 border mb-4">
                            <MDBCardBody>
                              <MDBRow>
                                <MDBCol md="2">
                                  <MDBCardImage
                                    src={track.img}
                                    fluid
                                    alt="Phone"
                                  />
                                </MDBCol>
                                <MDBCol
                                  md="4"
                                  className="text-center d-flex justify-content-center align-items-center"
                                >
                                  <p className="text-muted mb-0">{track.title}</p>
                                </MDBCol>
                                <MDBCol
                                  md="2"
                                  className="text-center d-flex justify-content-center align-items-center"
                                >
                                  <p className="text-muted mb-0 small">{track.service_type}</p>
                                </MDBCol>
                                <MDBCol
                                  md="2"
                                className="text-center d-flex justify-content-center align-show_live_test.exs:297items-center"
                                >
                                  <p className="text-muted mb-0 small">Qty: {trackings.carts_index[index]}</p>
                                </MDBCol>
                                <MDBCol
                                  md="2"
                                  className="text-center d-flex justify-content-center align-items-center"
                                >
                                  <p className="text-muted mb-0 small"><b>₱ {track.price}</b></p>
                                </MDBCol>
                              </MDBRow>
                              <hr
                                className="mb-4"
                                style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                              />
                              <MDBRow className="align-items-center">
                                <MDBCol md="2">
                                  <p className="text-muted mb-0 small">Track Order</p>
                                </MDBCol>
                                <MDBCol md="10">
                                  <MDBProgress
                                    style={{ height: "6px", borderRadius: "16px" }}
                                  >
                                    <MDBProgressBar
                                      style={{
                                        borderRadius: "16px",
                                        backgroundColor: "#E9B824",
                                      }}
                                      width={10}
                                      valuemin={0}
                                      valuemax={100}
                                    />
                                  </MDBProgress>
                                  <div className="d-flex justify-content-around mb-1">
                                    <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                      To Ship
                                    </p>
                                    <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                      To Recieve
                                    </p>
                                    <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                      Delivered
                                    </p>
                                  </div>
                                </MDBCol>
                              </MDBRow>
                            </MDBCardBody>
                          </MDBCard>
                      )
                    }

                    <div className="d-flex justify-content-between pt-2">
                      <p className="fw-bold mb-0">Order Details</p>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                      <p className="text-muted mb-0">Invoice Number : 788152</p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Total:</span> ₱ {trackings.carts.reduce((sum, cart, index) => sum + cart.price * trackings.carts_index[index], 0)}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        Invoice Date : {new Date().toLocaleString().replace(',','')}
                      </p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Delivery Charges - </span>{""}
                        ₱ 65.00
                        
                      </p>
                    </div>
  
                    <div className="d-flex justify-content-between mb-5">
                      <p className="text-muted mb-0">
                        Recepits Voucher : 18KU-62IIK
                      </p>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter
                    className="border-0 px-4 py-3"
                    style={{
                        backgroundColor: "#229495",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                      }}
                  >
                    <MDBTypography
                      
                      className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                    >
                      <b>Total paid:</b> <span className="mb-0 ms-2">₱ {trackings.carts.reduce((sum, cart, index) => sum + cart.price * trackings.carts_index[index], 0) + 65}</span>
                    </MDBTypography>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <Footer/>
        </section>
      </>
    );
  }
  export default Tracker;