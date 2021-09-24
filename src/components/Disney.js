import React from 'react'
import { useHistory } from 'react-router'
import "./Disney.css"

function Disney() {
    const history = useHistory();
    return (
        <div className="disney">

            <div className="image1Info">
                <img src="https://wallpaperaccess.com/full/3772766.jpg" alt="" />
                <span> <i>UP</i></span>
                <p>2009- coming on age - Animiation - 2.00H</p>
                <div>78-year-old Carl Fredricksen travels to <br />Paradise Falls in his house equipped with balloons, <br /> inadvertently taking a young stowaway. ... <br />
                    Determined to save his
                    home and keep the promise he <br /> made to his wife, widower....</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


            <div className="image2Info">
                <img src="https://wallpaperaccess.com/full/3772751.jpg" alt="" />
                <span>  <i>MOANA</i> </span>
                <p>2016- FULL - Animiation - 2.30H</p>
                <div>Born on the island village of Motunui, <br /> Moana is the daughter of Chief Tui and Sina, <br /> with an inherited love for the seas and voyaging. <br /> When her island becomes endangered <br /> by a life-killing darkness.... </div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


            <div className="image3Info">
                <img src="https://wallpaperaccess.com/full/3772734.jpg" alt="" />
                <span>  <i>INSIDE OUT</i> </span>
                <p>2015- GRAPHICS - Animiation - 2.34H</p>
                <div>The film is set in the mind of a young where five <br /> personified emotions—Joy, <br /> Sadness, Anger, Fear, and Disgust—try to <br />
                    lead her through life as she and her parents....</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


            <div className="image4Info">
                <img src="https://wallpaperaccess.com/full/3772710.jpg" alt="" />
                <span>  <i>ZOOTROPOLIS</i> </span>
                <p>2015- GRAPHICS - Animiation - 2.45H</p>
                <div>
                    From the largest elephant to the smallest shrew, <br /> the city of Zootopia is a mammal metropolis c <br />  where various animals live and thrive.  <br /> When Judy Hopps (Ginnifer Goodwin) <br /> becomes the first rabbit to join the police force...</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>

            <div className="image5Info">
                <img src="https://wallpaperaccess.com/full/769789.jpg" alt="" />
                <span>  <i>epic</i> </span>
                <p>2013- Animated - Class - 1.43H</p>
                <div>
                    When Mary, a 17-year-old teenager, shrinks in <br />  she discovers a world inhabited by strange  <br /> Soon, she finds herself reluctantly pulled into <br /> a battle between good and evil forces.... </div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>




        </div>
    )
}
export default Disney
