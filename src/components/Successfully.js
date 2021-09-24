import React from 'react'
import { useHistory } from 'react-router';
import './Successfully.css'

function Successfully() {
    const history = useHistory();

    return (

        <div className="abhishek">
            <img src="https://images8.alphacoders.com/955/955322.jpg" alt="" />
            <div className="successfully">
                <h1>Your Subscription  is Successfully done by you
                    with the Terms and Conditions ✅
                    Doubleclick on disney + to end the proccess.  <br /> THANK YOU
                </h1>
                {/* <button onDoubleClick={() => history.push('./home')}
                    className="submit">ENJOY DISNEY+</button> */}
                <img onDoubleClick={() => history.push('./home')}
                    className="submit"
                    src="/images/logo.svg" alt="" />
            </div>
        </div>

    )
}

export default Successfully
