import { fetchListPostIsPending, fetchListPostSuccess, fetchListPostFail } from '../actions/index';

function fetchListPost(){
    return dispatch => {
        dispatch(fetchListPostIsPending)
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => {
            if(res.error){
                throw(res.error);
            }
            dispatch(fetchListPostSuccess(res))
            return res;
        })
        .catch(error => {
            dispatch(fetchListPostFail(error));
        })
    }
}

export default fetchListPost;