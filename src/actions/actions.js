import {ADD, REMOVE, INC, DEC, ADD_PRICE, REMOVE_PRICE, CLEAR} from './actionTypes'

export const add_to_cart = (game) => {
    return{
        type: ADD,
        game
    }
}

export const remove_from_cart = (id) => {
    return{
        type: REMOVE,
        id
    }
}

export const increase_count = () => {
    return{
        type: INC
    }
}

export const decrease_count = () => {
    return{
        type: DEC
    }
}

export const increase_price = (price) => {
    return{
        type: ADD_PRICE,
        price
    }
}

export const decrease_price = (price) => {
    return{
        type: REMOVE_PRICE,
        price
    }
}

export const clear = () => {
    return{
        type: CLEAR
    }
}