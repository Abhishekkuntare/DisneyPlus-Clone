import { useHistory } from 'react-router';
import React, { useRef } from 'react'
import "./SignUp.css"
import { auth } from '../firebase'

function SignUp() {
    const history = useHistory();
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const phoneRef = useRef(null)
    // const passwordRef = useRef(null)
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            phoneRef.current.value)

            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                alert(error.message)
            });
    }

    return (
        <div className="login">

            <div className="header signUp__header">
                <nav>
                    <div className="nav__menu ">

                        <button onClick={() => history.push("./sign")}
                            className="signUp__button"
                        >LOGIN</button>

                        <select className="signUp__select"
                            name="option" id="option">
                            <option value="Defalut">Defalut</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Tamil">Tamil</option>
                        </select>
                    </div>
                </nav>
            </div>
            <div className="login__image">
                <img className="login__background signUp"
                    src="/images/login-background.jpg" alt="" />
                <form className="form">
                    <img src="/images/cta-logo-one.svg" alt="" />
                    <h1>New To Disney+</h1>

                    <label htmlFor="name"></label>
                    <input type="text" placeholder="Enter Your Name"
                        ref={nameRef} />

                    <label htmlFor="email"></label>
                    <input type="email" placeholder="Enter Your Email"
                        ref={emailRef} />

                    <label htmlFor="phone"></label>
                    <input type="phone" placeholder="Enter Your Phone Number"
                        ref={phoneRef} />

                    <label htmlFor="password"></label>
                    <input type="password" placeholder="Set a Password"
                        ref={passwordRef} />

                    <button onClick={register}
                        type="submit"
                        onDoubleClick={() => history.push("./home")}
                    >DISNEY+</button>

                </form>

                <p className="sign__des">New customers can get 30 <br /> days free before it also goes up to  £5.99a month after. <br /> To join the disney+ double click  <br /> As with most other streaming services, <br />  customers can cancel their subscription whenever, <br /> there is no long term contract.
                </p>

            </div>

        </div>
    )
}

export default SignUp
