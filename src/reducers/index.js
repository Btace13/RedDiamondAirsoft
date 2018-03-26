import { ADD_ARTICLE } from "../constants/action-types";
import {ADD_ITEM} from "../constants/action-types";
import {REMOVE_ITEM} from "../constants/action-types";

const initialState = {
    articles: [],
    cart: 0,
    items: [{}]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };
        case ADD_ITEM:
            return {...state, cart: state.cart+1, items: [...state.items, action.payload]}
        case REMOVE_ITEM:
            return {...state, cart: state.cart--}
        default:
            return state;
    }
};
export default rootReducer;