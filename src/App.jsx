import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/js/store/index';
import ListPost from '../src/components/ListPost';
import PostForm from '../src/components/PostForm';

const App = () => {
    return(
        <Provider store={store}>
            <div className='row'>
                <div className="col-lg-6">
                    <PostForm />
                </div>
                <div className="col-lg-6">
                    <ListPost />
                </div>
            </div>
        </Provider>
    );
}

export default App;