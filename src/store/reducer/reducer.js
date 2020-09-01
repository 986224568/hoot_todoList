import {ADD_ITEM, DELETE_ITEM, FETCH_ITEM, FINISH_ITEM, INIT_ITEM} from "../actionTypes";


const defaultState = {
    itemList: [{"id": "204", "content": "1113", "status": false}]
};
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            state.itemList = [...state.itemList, action.item]
            return {
                itemList: [...state.itemList, action.item]
            };
        case DELETE_ITEM:
            state.itemList = state.itemList.filter((value, index) => {
                return value.id !== action.index
            })
            return state.itemList;
        case FINISH_ITEM:
            // console.log('actionIndex', action.index)
            state.itemList.map((item) => {
                if (item.id === action.index) {
                    return item.status = !item.status
                }
            })
            // for (let i = 0; i < state.itemList.length; i++) {
            //     if (i === action.index) {
            //         state.itemList[i].status = !state.itemList[i].status
            //     }
            // }
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