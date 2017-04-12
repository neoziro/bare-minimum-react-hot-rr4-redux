import { createStore } from 'redux';

const reducer = (state = {
	counter:0,
	newsData:'my data'
}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
				counter:state.counter +1
			})
        case 'DECREMENT':
            return Object.assign({}, state, {
				counter:state.counter -1
			})
    }

    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
