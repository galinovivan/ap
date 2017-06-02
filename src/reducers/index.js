/**
 * Created by ivan on 02.06.17.
 */
import { combineReducers } from 'redux';
import user from './user';
import page from './page';


export default combineReducers({page, user});
