import React from 'react'
import { useHistory } from 'react-router';
import "./Disney.css"

function Marvels() {
    const history = useHistory();
    return (
        <div className="disney">
            <div className="image1Info">
                <img src="https://wallpaperaccess.com/full/54696.jpg" alt="" />
                <span> <i>IRON MAN 3</i></span>
                <p>2013- SCI-FI - Animiation - 2.30H</p>
                <div>Tony Stark encounters a formidable foe called the Mandarin. <br /> After failing to defeat his enemy, <br /> Tony embarks on a journey of self-discovery as he <br /> fights against the powerful Mandarin.</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


            <div className="image2Info">
                <img src="https://wallpaperaccess.com/full/1089104.png" alt="" />
                <span>  <i>AVENGERS  </i> </span>
                <p>2019- END GAME - Animiation,CONCLUCION- 2.30H</p>
                <div>After Thanos, an intergalactic warlord, disintegrates half of <br /> the universe, the Avengers must reunite and <br /> assemble again to reinvigorate their trounced <br /> allies and restore balance.</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


            <div className="image3Info">
                <img src="https://wallpaperaccess.com/full/243562.jpg" alt="" />
                <span>  <i>SPIDER MAN</i> </span>
                <p>2017- HOMECOMING - Animiation, - 2.54H</p>
                <div>Peter Parker tries to stop the Vulture from selling weapons <br /> made with advanced Chitauri technology while <br /> trying to balance his life as an ordinary <br /> high school student. </div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


            <div className="image4Info">
                <img src="https://wallpaperaccess.com/full/153764.jpg" alt="" />
                <span>  <i>BATMAN V SUPERMAN</i> </span>
                <p>2016-Dawn of Justice- Animiation - 2.45H</p>
                <div>
                    Bruce Wayne, a billionaire,believes that Superman is a <br /> threat to humanity after his battle in Metropolis. Thus, <br /> he decides to adopt his mantle of Batman <br /> and defeat him once and for all.</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>

            <div className="image5Info">
                <img src="https://wallpaperaccess.com/full/735825.jpg" alt="" />
                <span>  <i>THOR</i> </span>
                <p>2013-THE DARK WORLD--2.43H</p>
                <div>
                    Thor sets out on a journey to defeat Malekith, <br /> the leader of the Dark Elves when he returns to Asgard to retrieve a <br /> dangerous weapon and fulfill his desire.</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>




        </div>
    )
}

export default Marvels
