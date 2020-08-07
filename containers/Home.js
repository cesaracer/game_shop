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
            <div style={{float: "left", marginBottom: "200px"}}>
                <img id="bannerImg" style={{width:"60%", marginLeft: "20%", float: "left"}} src="images/gaming3.jpg"/>
                <div id="bannerFont" style={{height: windowHeight, width: "100%", marginTop: -windowHeight, zIndex: "10", backgroundColor: "black", color: "white", opacity: "60%", float: "left", textAlign: "center"}}>
                    <h1 style={{paddingTop: windowHeight/3, fontSize: "50px"}}>Welcome to Game Shop</h1>
                    
                </div>
            </div>
            <div id="mobileBanner">
                <h1>Welcome to Game Shop</h1>
                <h3>Check out our seasonal deals</h3>
            </div>
            <div className="deals">
                <div id="title"><h2>Our Services</h2></div>
                <div id="content">
                    <img src="images/repair.svg" alt=""/>
                    <p style={{fontSize: "18px", paddingLeft: "10px", paddingRight: "10px"}}>
                        Having problems with your system? Bring it in! Our team of experts will diagnose the issue for free! Serious problems may require that you leave your system with us for a couple of days.
                        Only repairs that you authorize will be made. If your system still doesn't work after being repaired, bring it in again and we'll retry free of charge.
                    </p>
                </div>
                <div id="content">
                    <img src="images/money.svg" alt=""/>
                    <p style={{fontSize: "18px", paddingLeft: "10px", paddingRight: "10px"}}>
                        Have old games that you don't play anymore? Bring them in! We accept almost all games and systems in exchange for cash or store credit. Trade-ins also help you earn reward member points
                        which you can redeem for exclusive items or huge discounts towards any purchase! For more details, feel free to stop by any store and ask an associate.
                    </p>
                </div>
                <div id="content">
                    <img src="images/switch.svg" alt=""/>
                    <p style={{fontSize: "18px", paddingLeft: "10px", paddingRight: "10px"}}>Looking to improve your skills? Come on in! Every month, we host in store tournaments. Each months' tournament is decided within the first week and the acutal tournament is held during the last week.
                        Stop by your local store to vote for the tournament game and to register. Winners will be awarded unique prices and be eligible for regional tournaments.
                    </p>
                </div>
            </div>
            <div className="deals">
                <div id="title"><h2>Summer Deals</h2></div>
                <Product {...products[0]}/>
                <Product {...products[1]}/>
                <Product {...products[2]}/>
            </div>
            <div className="deals">
                <div id="title">
                    <h2>You might like...</h2>
                </div>
                <Product {...products[3]}/>
                <Product {...products[4]}/>
                <Product {...products[5]}/>
            </div>
        </div>
    )
}

export default Home