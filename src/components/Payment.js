import { useHistory } from 'react-router';
import './Payment.css'


function Payment() {
    const history = useHistory();

    return (
        <>
            <div className="payment">
                <img src="https://cdn.vox-cdn.com/thumbor/Q02WxhVlM34inuH9LP3EpM9x7Vo=/0x0:2238x1350/1200x675/filters:focal(940x496:1298x854)/cdn.vox-cdn.com/uploads/chorus_image/image/68494837/Screen_Shot_2019_11_12_at_7.27.13_AM.0.png" alt="" />
                <h5>PLANS AND OFFER</h5>
                <p className="permonth">per month</p>
                <div className="plansoffer">
                    <p>Basic 720p  <i class="fas fa-rupee-sign"></i>299 & 70% off </p>
                    <p>Standard 1080p  <i class="fas fa-rupee-sign"></i>599 & 50% off </p>
                    <p>Premium 4K + HDR  <i class="fas fa-rupee-sign"></i>799 & 30% off </p>

                </div>
                <div>
                </div>
                <div className="terms">
                    <p>Powered by  <strong>Stripe</strong> </p>
                    <p>Terms & Privercy</p>
                </div>
                <div className="loginScreen__gradiant" />

            </div>
            <div className="google">

                <div className="google">
                    <i class="fab fa-google-pay goole__logo"></i>
                </div>
                <div className="border">

                </div>
                <div className="payment__form">
                    <form >
                        <h1> Or Pay With Card</h1>
                        <input className="payment__name"
                            type="text" placeholder="Enter Your Name" />

                        <input className="payment__email"
                            type="email" placeholder="Enter Your Email " />

                        <input className="payment__card"
                            type="text" placeholder="Card Number" /> <i class="fab fa-cc-visa"></i> <i class="fab fa-cc-mastercard"></i><i class="fas fa-credit-card"></i>
                        <input className="mm"
                            type="text" placeholder="MM" />
                        <input className="yy"
                            type="text" placeholder="YYYY" />

                        <input className="cvc"
                            type="text" placeholder="CVC" />
                        <i class="far fa-credit-card cvv"></i>

                        <div>

                            <button
                                onClick={() => history.push('/successfully')}
                                className="button"
                                type="submit">GET DISNEY+</button>
                        </div>

                        <div className="paragraphplan"><p>By conforming your subscription, you allow to charge  your card for payment and future payment is accordence with their Terms and conditons.</p></div>


                    </form>
                </div>


            </div>

        </>
    )
}

export default Payment
