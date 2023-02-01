import { AnyAction } from "redux";
import { IStore } from "./types";

const initialState = {
    movie: {}
}

const detailMovieReducer = (state: IStore = initialState.movie, action: AnyAction) => {
    switch(action.type) {
        case 'detailMovie/setDetailMovie':
            return {...state, movie: action.payload }
        default:
            return state;
    }
}

export default detailMovieReducer;