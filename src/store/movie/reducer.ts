import { AnyAction } from "redux";
import { IStore } from "./types";

const initialState = {
    allList: [],
    listMovies: [],
    status: 'idle',
}

const moviesReducer = (state: IStore = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'allMovies/setAllMovies':
            return {...state, allList: [...action.payload]}
        case 'searchMovies/setSearchMovies':
            return {...state, listMovies: [...action.payload], status: 'succeeded'}
        default:
            return state;
    }
}

export default moviesReducer;