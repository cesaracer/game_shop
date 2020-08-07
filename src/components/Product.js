import React from 'react'
import { add_to_cart, increase_price, increase_count } from '../actions/actions'
import {connect} from 'react-redux'

function Product(props){
    const handleAdd = (item) => {
        props.addToCart(item)
        props.increaseCount()
        props.increasePrice(item.price)
    }
    return(
        <div className="product">
            <div id="" style={{height:"70%", width: "100%", float: "left"}}>
                <img className="product-img" src={props.img} alt="Game cover"/>
                <h4 className="product-title">{props.title}</h4>
            </div>
            <div style={{height: "30%", width: "100%"}}>
                <h5>${props.price}</h5>
                <h4 id="addBtn"onClick={() => handleAdd({
                    id: props.id,
                    title: props.title,
                    description: props.description,
                    price: props.price, 
                    img: props.img
                })}>Add</h4>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: item => dispatch(add_to_cart(item)),
        increaseCount: () => dispatch(increase_count()),
        increasePrice: price => dispatch(increase_price(price))
    }
}

export default connect(null, mapDispatchToProps)(Product);