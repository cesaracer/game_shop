import React from 'react'
import Product from '../components/Product'
import data from '../data/products.json'

function Inventory(){
    const products = data.Products;
    return(
        <div className="inventory">
            <div id="title"><h1>Shop</h1></div>
            <div className="productList">
                {
                    products.map(i => <Product {...i}/>)
                }
            </div>
        </div>
    )
}
export default Inventory