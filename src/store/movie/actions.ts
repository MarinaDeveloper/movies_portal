import { Dispatch } from "redux";
import getAllMovies from "services/getAllMovies";
import getMoviesSearch from "services/getMoviesSearch";

import { IStore } from "./types";

export const setAllMoviesAction = (payload: IStore['allList']) => {
    return {
        type: 'allMovies/setAllMovies',
        payload,
    }
}

export const setSearchMoviesAction = (payload: IStore['listMovies']) => {
    return {
        type: 'searchMovies/setSearchMovies',
        payload,
    }
}

export const loadAllMovies = () => async (dispatch: Dispatch) => {
    try {
        const response = await getAllMovies();
        dispatch(setAllMoviesAction(response.data))
    } catch(e) {
        alert('An error occurred. Please try again.')
    }
}

export const loadMoviesSearch = (category: string) => async (dispatch: Dispatch) => {
    try {
        const response = await getMoviesSearch(category);
        dispatch(setSearchMoviesAction(response.data))
    } catch(e) {
        alert('An error occurred. Please try again.')
    }
}