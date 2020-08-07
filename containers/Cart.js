import React from 'react'
import {connect} from 'react-redux'
import {clear} from '../actions/actions'
import CartItem from '../components/CartItem'

function Cart(props){
    return(
        <div>
            <div id="title">
                <h1>Checkout</h1>
                <img onClick={() => props.clearCart()} style={{height: "20px", cursor: "pointer", float: "left", paddingTop: "35px"}} src="images/trash.png" alt="trash can icon"/>
            </div>
            
            <div className="cart">
                {
                    props.userCart.map(p => <CartItem {...p}/>)
                }
                <div id="sum">${props.price.toFixed(2)}</div>
            </div>
            
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        userCart: state.cart,
        price: state.price
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        clearCart: () => dispatch(clear())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)