import { 
    ADD_POST,
    FETCH_LIST_POST_SUCCESS
}  from '../constants/action-types';

const initialState = {
    listpost: []
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_POST:
            return Object.assign({}, state, {
                listpost: state.listpost.concat(action.payload)
            });
        case FETCH_LIST_POST_SUCCESS:
            return Object.assign({}, state, {
                listpost: state.listpost.concat(...action.payload)
            });
        default:
            return state;
    }
}

export default rootReducer;