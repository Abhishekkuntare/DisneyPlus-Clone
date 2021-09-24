import React from 'react'
import { useHistory } from 'react-router';
import "./Disney.css"

function StarsWars() {
    const history = useHistory();
    return (
        <div className="disney">
            <div className="image1Info">
                <img src="https://wallpaperaccess.com/full/4430473.jpg" alt="" />
                <span> <i>Guardians of the Galaxy</i></span>
                <p>2014- STARWARS - Animiation - 2.00H</p>
                <div>Peter escapes from the planet Morag with a valuable <br /> orb that Ronan the Accuser wants. <br /> He eventually forms a group <br /> with unwilling heroes to stop Ronan.</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


            <div className="image2Info">
                <img src="https://wallpaperaccess.com/full/560121.jpg" alt="" />
                <span>  <i>YODA</i> </span>
                <p>2017- STARWARS - Animiation - 2.30H</p>
                <div>Yoda was a legendary Jedi Master and stronger than  most in his  <br />  connection  with the Force.Small in size but wise and powerful, <br /> he trained Jedi for over 800 years.</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


            <div className="image3Info">
                <img src="https://wallpaperaccess.com/full/150196.jpg" alt="" />
                <span>  <i>THE LAST JEDI </i> </span>
                <p>2015- STARWARS - Animiation - 2.34H</p>
                <div>Rey seeks to learn the ways of the Jedi under Luke Skywalker, <br /> its remaining member, to reinvigorate the Resistance's war <br /> against the First Order. </div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


            <div className="image4Info">
                <img src="https://wallpaperaccess.com/full/132518.jpg" alt="" />
                <span>  <i>SITH</i> </span>
                <p>2015- STARWARS - Animiation - 2.45H</p>
                <div>
                    The Sith are the main antagonists of many works in the <br /> fictional universe of the Star Wars franchise.</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>

            <div className="image5Info">
                <img src="https://wallpaperaccess.com/full/157285.jpg" alt="" />
                <span>  <i>REBEL</i> </span>
                <p>2013- Animated - Class - 1.43H</p>
                <div>
                    When Mary, a 17-year-old teenager, shrinks in <br />  she discovers a world inhabited by strange  <br /> Soon, she finds herself reluctantly pulled into <br /> a battle between good and evil forces.... </div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>




        </div>
    )
}

export default StarsWars
