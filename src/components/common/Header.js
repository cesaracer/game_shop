import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return(
        <div>
            <div className="navBar">
                <div id="logo" style={{position: "relative", float: "left"}}><img style={{height: "100px"}} src="images/logo.svg"/></div>
                <div id="items" style={{paddingTop: "20px"}}>
                    <div id="navbarItem"><Link style={{color: "dimgrey", textAlign: "center", textDecoration: "none", float: "left", fontSize: "20px"}} to="">Home</Link></div>
                    <div id="navbarItem"> | </div>
                    <div id="navbarItem"><Link style={{color: "dimgrey", textAlign: "center", textDecoration: "none", float: "left", fontSize: "20px"}} to="/shop">Shop</Link></div>
                    <div id="navbarItem"> | </div>
                    <div id="navbarItem"><Link style={{color: "dimgrey", textAlign: "center", textDecoration: "none", float: "left", fontSize: "20px"}} to="/contact">Contact</Link></div>  
                </div>
                <div id="cart">
                    <Link to="/cart"><img src="images/cart.png" id="cartImg" alt="shopping cart icon"/>
                    <p style={{display: "block", textAlign: "center", backgroundColor: "red", color: "white", width: "17px", height: "17px", borderRadius: "10px", position: "absolute", zIndex: "1", marginTop: "25px", marginRight: "0px"}}>{props.count}</p></Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        count: state.count
    }
}

export default connect(mapStateToProps)(Header)