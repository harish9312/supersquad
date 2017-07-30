import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions'; 
import createCharacter from './helperFunctions';

function heroes(state = [], action) {
    switch(action.type) {
        default:
            return state;
        case ADD_CHARACTER:
            let heroes = [...state,createCharacter(action.id)]
            return heroes;
        case REMOVE_CHARACTER:
            heroes = state.filter(item => item.id !== action.id);
            return heroes;    
    }
}

export default heroes;