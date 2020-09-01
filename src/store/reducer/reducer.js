import {ADD_ITEM, DELETE_ITEM, FETCH_ITEM, FINISH_ITEM, INIT_ITEM} from "../actionTypes";


const defaultState = {
    itemList: [{"id": "204", "content": "1113", "status": false}]
};
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                itemList: [...state.itemList, action.item]
            };
        case DELETE_ITEM:
            state.itemList = state.itemList.filter((value, index) => {
                return value.id !== action.index
            })
            return state.itemList;
        case FINISH_ITEM:
            for (let i = 0; i < state.itemList.length; i++) {
                if (i === action.index) {
                    state.itemList[i].isDone = !state.itemList[i].isDone
                }
            }
            return {
                itemList: [...state.itemList]
            };
        case INIT_ITEM:
            return state.itemList;
        case FETCH_ITEM:
            let result = {
                itemList: action.itemList
            };
            console.log('result', result);
            return result;
        default:
            return defaultState;
    }
}
export default reducer