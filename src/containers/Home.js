import React, {useState} from 'react'
import Product from '../components/Product'
import data from '../data/products.json'

function Home(){
    const ratio = 3260/4890;
    const [windowHeight, setHeight] = useState(((window.innerWidth) * ratio) * .6)
    
    React.useEffect(() => {
        function handleResize() {
            setHeight(((window.innerWidth) * ratio) * .6)
        }
        window.addEventListener('resize', handleResize)
    })

    const products = data.Products;
    return(
        <div>
            <div className="content-left">
                <div className="content-img">
                    <img src="images/repair.svg" alt="repair image"/>
                </div>
                <div className="content-text">
                    <p>
                        Having problems with your system? Bring it in! Our team of experts will diagnose the issue for free! Serious problems may require that you leave your system with us for a couple of days.
                        Only repairs that you authorize will be made. If your system still doesn't work after being repaired, bring it in again and we'll retry free of charge.
                    </p>
                </div>
            </div>
            <div className="content-right">
                <div className="content-img">
                    <img src="images/money.svg" alt="money"/>
                </div>
                <div className="content-text">
                    <p>
                        Have old games that you don't play anymore? Bring them in! We accept almost all games and systems in exchange for cash or store credit. Trade-ins also help you earn reward member points
                        which you can redeem for exclusive items or huge discounts towards any purchase! For more details, feel free to stop by any store and ask an associate.
                    </p>
                </div>
            </div>
            <div className="content-left">
                <div className="content-img">
                    <img src="images/switch.svg" alt="switch logo"/>
                </div>
                <div className="content-text">
                    <p>
                        Looking to improve your skills? Come on in! Every month, we host in store tournaments. Each months' tournament is decided within the first week and the acutal tournament is held during the last week.
                        Stop by your local store to vote for the tournament game and to register. Winners will be awarded unique prices and be eligible for regional tournaments.
                    </p>
                </div>
            </div>
            <div className="deals">
                <div id="title"><h2>Summer Deals</h2></div>
                <Product {...products[0]}/>
                <Product {...products[1]}/>
                <Product {...products[2]}/>
                <Product {...products[3]}/>
            </div>
            <div className="deals">
                <div id="title">
                    <h2>You might like...</h2>
                </div>
                <Product {...products[3]}/>
                <Product {...products[4]}/>
                <Product {...products[5]}/>
                <Product {...products[2]}/>
            </div>
        </div>
    )
}

export default Home