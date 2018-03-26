import {ADD_ARTICLE} from "../constants/action-types";
import {ADD_ITEM} from "../constants/action-types";
import {REMOVE_ITEM} from "../constants/action-types";

export const addArticle = article => (
    {type: ADD_ARTICLE, payload: article}
);
export const addItem = item => (
    {type: ADD_ITEM, payload: item}
);