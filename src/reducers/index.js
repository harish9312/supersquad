import { combineReducers } from 'redux';
import heroes from './heroesReducer';
import characters from './charactersReducer';

const rootReducer = combineReducers({
    characters,
    heroes,
})
export default rootReducer;