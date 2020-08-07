import React from 'react'
import {connect} from 'react-redux'
import {remove_from_cart, decrease_count, decrease_price} from '../actions/actions'

function CartItem(props){
    const handleRemove = () => {
        props.removeItem(props.id)
        props.decreaseCount()
        props.decreasePrice(props.price)
    }
    return(
        <div className="cart-item">
            <div id="thumb"><img style={{height: "100px"}} src={props.img} alt={props.title}/></div>
            <div className="cart-info">
                <div style={{width: "25%"}}>{props.title}</div>
                <div style={{width: "25%"}}>{props.amount}</div>
                <div style={{width: "25%"}}>{props.price}</div>
                <div style={{width: "25%"}}><img id="removeBtn" src="images/delete.svg" onClick={() => handleRemove()}/></div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeItem: id => dispatch(remove_from_cart(id)),
        decreaseCount: () => dispatch(decrease_count()),
        decreasePrice: price => dispatch(decrease_price(price))
    }
}

export default connect(null, mapDispatchToProps)(CartItem)