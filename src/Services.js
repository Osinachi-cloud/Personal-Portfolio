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
                                <br/>
                                <br/> 
                                {/* <h3> Step 1 </h3> */}
                                <p>
                                    Build Responsive and Scalable Web Apps.

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
                                <br/>
                                <br/> 
                                <p>
                                    Build Responsive Content management System Apps.
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
                                        <br/> <br/>
                                        <p>
                                           Build mobile cross-platform apps for Android and IOS.

                                        </p>
                                    </div>
                        </div>
                    </div>
    </div> 

</div>
    )
}

export default Services
