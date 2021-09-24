import React from 'react'
import "./Disney.css"
import { useHistory } from 'react-router'

function Pixar() {
    const history = useHistory();
    return (
        <div className="disney">
            <div className="image1Info">
                <img src="https://wallpaperaccess.com/full/3772673.jpg" alt="" />
                <span> <i>TOY STORY 4</i></span>
                <p>2019- coming on age - Animiation - 2.00H</p>
                <div>Woody attempts to make Forky, a toy, <br /> suffering from existential crisis, realise his <br />
                    importance in the life of Bonnie, their owner. <br /> However, things become difficult when Gabby <br /> Gabby enters their lives.</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


            <div className="image2Info">
                <img src="https://wallpaperaccess.com/full/1225266.jpg" alt="" />
                <span>  <i>MONSTERS</i> </span>
                <p>2001- colmey - Animiation - 1.30H</p>
                <div>In Monstropolis, best friends Sulley and Mike are the top <br /> scarers working at the Monsters, Inc. However, <br /> their lives are hugely disrupted when a <br /> human girl enters their world. </div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


            <div className="image3Info">
                <img src="https://lumiere-a.akamaihd.net/v1/images/summary-1600-884_df2fb855.jpeg?region=0,0,1600,884" alt="" />
                <span>  <i>THE LION KING</i> </span>
                <p>2019- GRAPHICS - Animiation - 2.34H</p>
                <div>Simba, a young lion prince, flees his kingdom <br /> after the murder of his father, Mufasa. <br /> Years later, a chance encounter with Nala, <br /> a lioness, causes him </div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


            <div className="image4Info">
                <img src="https://wallpaperaccess.com/full/711629.jpg" alt="" />
                <span>  <i>COCO</i> </span>
                <p>2017- GRAPHICS - Animiation - 2.55H</p>
                <div>
                    Miguel pursues his love for singing in spite of his <br /> family's ban on music. He stumbles into the <br /> Land of the Dead, where he learns about his <br /> great-great-grandfather who <br />  was a legendary singer.</div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>

            <div className="image5Info">
                <img src="https://wallpaperaccess.com/full/3772696.jpg" alt="" />
                <span>  <i>BOLT</i> </span>
                <p>2008- Animated - Class - 3.43H</p>
                <div>
                    Bolt is a dog who stars in a superhit television show <br /> in which he possesses superpowers <br /> However, things change when he embarks.  <br /> </div>
                <button onClick={() => history.push("./payment")}
                >GET PREMIUM</button>
            </div>


        </div>
    )
}

export default Pixar
