import React from 'react'
import './Services.css'

function Services() {
    return (
    <div className="services" id="services">
            <h2>My Services</h2>

        <div className="container">
                    <div className="card">
                        <div className="content">
                            <div className="first">
                                <div className="imgBx">
                                    <img src="/logo192.png" alt="what"/>
                                </div>
                                <div className="contentBx">
                                    <h3> REACT</h3>
                                    <p> Responsive Websites</p>
                                </div>
                            </div>

                            <div className="second">
                                <h2> REACT </h2>
                                {/* <h3> Step 1 </h3> */}
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <div className="first">
                                <div className="imgBx">
                                    <img src="/wordpress1.png" alt="what"/>
                                </div>
                                <div className="contentBx">
                                    <h3> WORDPRESS</h3>
                                    <p> Style Your Web </p>
                                </div>
                            </div>

                            <div className="second">
                                <h2> WORDPRESS </h2>
                                {/* <h3> Step 2 </h3> */}
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                                    <div className="first">
                                        <div className="imgBx">
                                            <img src="/crossplatform1.png" alt="what"/>
                                        </div>
                                        <div className="contentBx">
                                            <h3> MOBILE</h3>
                                            <p> Interactive Web </p>
                                        </div>
                                    </div>

                                    <div className="second">
                                        <h2> MOBILE</h2>
                                        <h3>  </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                        </p>
                                    </div>
                        </div>
                    </div>
    </div> 

</div>
    )
}

export default Services
