import { ADD, REMOVE, CLEAR, INC, DEC, ADD_PRICE, REMOVE_PRICE } from "../actions/actionTypes"

export const cartReducer = (state = [], action) => {
    switch(action.type){
        case ADD:
            let addIndex = -1;
            addIndex = state.findIndex(obj => obj.id === action.game.id)
            if(addIndex === -1){
                action.game.amount = 1
                return[
                    ...state,
                    action.game
                ]
            }
            else{
                let item = state[addIndex]
                item.amount = item.amount + 1
                let newArray = [
                    ...state.slice(0, addIndex),
                    ...state.slice(addIndex + 1)
                ]
                return[
                    ...newArray,
                    item
                ]
            }
            
        case REMOVE:
            let index = state.findIndex(obj => obj.id === action.id)
            let currentArray = [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ]
            if(state[index].amount === 1){
                return currentArray
            }
            else{
                let current = state[index]
                current.amount = current.amount - 1
                return[
                    ...currentArray,
                    current
                ]
            }
        case CLEAR:
            return []
        default: 
            return state
    }
}

export const countReducer = (state = 0, action) => {
    switch(action.type){
        case INC:
            return state + 1
        case DEC:
            return state - 1
        case CLEAR:
            return state - state
        default: 
            return state;
    }
}

export const priceReducer = (state = 0, action) => {
    
    switch(action.type){
        case ADD_PRICE:
            return state + action.price
        case REMOVE_PRICE:
            return state - action.price
        case CLEAR: 
            return 0
        default:
            return state;
    }
}