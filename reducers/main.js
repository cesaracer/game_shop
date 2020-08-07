import { cartReducer, countReducer, priceReducer} from './reducers';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    cart: cartReducer,
    count: countReducer,
    price: priceReducer
})

export default rootReducer;