import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <img className="footer_img"
                src="/images/logo.svg" alt="" />

            <div className="line"></div>
            <div className="container1">
                <h6 className="headOne">QUESTIONS ? CALL 915-607-553-6</h6>
                <br />
                <div className="itemsOne">
                    <p>FAQ</p>
                    <p>PRIVACY</p>
                    <p>NEW </p>
                    <p>ACCOUNT</p>
                </div>
            </div>

            <div className="container3">
                <div className="itemsThree">
                    <p>PREMIMUM</p>
                    <p>WAYS TO WATCH</p>
                    <p>INVESTOR RELATIONS</p>
                    <p>ONLY ON DISNEY +</p>
                </div>
            </div>
            <div className="container5">

                <span> <img src="/images/logo.svg" alt="" /></span>
                <br />
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-facebook-square"></i>
                <i className="fas fa-link"></i>
                <br />
                <p >www.disney.com/in <i className="far fa-copyright"></i> 2021</p>


                <div className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">Corporate Information</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
