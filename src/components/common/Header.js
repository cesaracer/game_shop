import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return(
        <div>
            <div className="navbar">
                <div id="logo" style={{position: "relative", float: "left"}}><img style={{height: "100px"}} src="images/logo.svg"/></div>
                <div id="items" style={{paddingTop: "20px"}}>
                    <div class="navbar-item"><Link style={{color: "dimgray", textDecoration: "none", fontSize: "30px"}} to="">Home</Link></div>
                    <div class="navbar-item"> | </div>
                    <div class="navbar-item"><Link style={{color: "dimgray", textDecoration: "none", fontSize: "30px"}} to="/shop">Shop</Link></div>
                    <div class="navbar-item"> | </div>
                    <div class="navbar-item"><Link style={{color: "dimgray", textDecoration: "none", fontSize: "30px"}} to="/contact">Contact</Link></div>  
                </div>
                <div class="cart-icon">
                    <Link to="/cart"><img src="images/cart.png" id="cart-icon-img" alt="shopping cart icon"/>
                        <p>{props.count}</p>
                    </Link>
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