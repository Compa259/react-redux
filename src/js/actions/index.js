import { 
    ADD_POST,
    FETCH_LIST_POST_FAIL,
    FETCH_LIST_POST_IS_PENDING,
    FETCH_LIST_POST_SUCCESS
 } from '../constants/action-types';

 export function addPost(payload){
    return {
        type: ADD_POST,
        payload
    }
}

export function fetchListPostIsPending(){
    return {
        type: FETCH_LIST_POST_IS_PENDING
    }
}

export function fetchListPostSuccess(listPost){
    return {
        type: FETCH_LIST_POST_SUCCESS,
        payload: listPost   
    }
}

export function fetchListPostFail(error){
    return {
        type: FETCH_LIST_POST_FAIL,
        payload: error
    }
}


