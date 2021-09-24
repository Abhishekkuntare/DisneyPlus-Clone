import React from 'react'
import { useHistory } from 'react-router';
import "./Disney.css"


function National() {
    const history = useHistory();
    return (
        <div className="disney">
            <div className="image1Info">
                <img src="https://wallpaperaccess.com/full/310756.jpg" alt="" />
                <span> <i>FOREST//</i></span>
                <p>2021-NATIONAL-GEO - forest - 1.00H</p>
                <div>A forest is an area of land dominated by trees. <br /> Hundreds of definitions of forest are used <br /> throughout the world, <br /> incorporating factors such as tree density, ...</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


            <div className="image2Info">
                <img src="https://wallpaperaccess.com/full/124518.jpg" alt="" />
                <span> <i>BEACH  BOFFY ! </i> </span>
                <p>2021- NATIONAL-GEO - SHOW - 1.30H</p>
                <div>A beach is a landform alongside a body of water <br /> which consists of loose particles. <br /> The particles composing a beach are typically made from rock, ...</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


            <div className="image3Info">
                <img src="https://wallpaperaccess.com/full/186462.jpg" alt="" />
                <span>  <i>WHAT'S EARTH ?</i> </span>
                <p>2015- NATIONAL-GEO  - SHOW - 1.34H</p>
                <div>Earth is the third planet from the Sun and <br /> the only astronomical object known to harbor and  <br /> support life. About 29.2% of Earth's surface is land consisting ...</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


            <div className="image4Info">
                <img src="https://wallpaperaccess.com/full/240618.jpg" alt="" />
                <span>  <i>THE UNIQ ^</i> </span>
                <p>2015- NATIONAL-GEO  - SHOW - 1.45H</p>
                <div>
                    From the largest elephant to the smallest shrew, <br /> the city of Zootopia is a mammal metropolis c <br />  where various animals live and thrive.  <br /> When Judy Hopps (Ginnifer Goodwin) <br /> becomes the first rabbit to join the police force...</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>

            <div className="image5Info">
                <img src="https://wallpaperaccess.com/full/119840.jpg" alt="" />
                <span>  <i>WAVES ``</i> </span>
                <p>2013- NATIONAL-GEO - SHOW - 1.00H</p>
                <div>
                    HOW wave works in the night at all day this is <br /> calm but at the night at 12o clock after <br /> going to very scerry the ligh see what happend in that show watch. </div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>




        </div>
    )
}

export default National
