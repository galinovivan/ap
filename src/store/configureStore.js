/**
 * Created by ivan on 02.06.17.
 */
import { createStore } from 'redux';
import rootReducer from '../reducers';


export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);


    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReduser = require('../reducers');
            store.replaceReducer(nextRootReduser);
        })
    }

    return store;

}
