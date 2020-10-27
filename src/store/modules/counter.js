import {Map} from 'immutable';

// action type define
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// action function define
export const changeColor = color => ({ type:CHANGE_COLOR, color});
export const increment = () => ({type:INCREMENT});
export const decrement = () => ({type:DECREMENT});

// initial state define
const initialState = Map ({
    color:'red',
    number:0
});

// reducer
export default function counterReducer(state=initialState, action){
    switch (action.type) {
        case CHANGE_COLOR:
            // return {
            //     ...state,
            //     color:action.color
            // };
            return state.set('color', action.color);
        case INCREMENT:
            // return {
            //     ...state,
            //     number: state.number + 1
            // };
            return state.update('number', number => number +1);
        case DECREMENT:
            // return {
            //     ...state,
            //     number: state.number - 1
            // };
            return state.update('number', number => number -1);
        default:
            return state;
    }
}