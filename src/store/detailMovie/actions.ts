import { Dispatch } from "redux";
import getMovieID from "services/getMovieID";

import { IStore } from "./types";

export const setDetailMovieAction = (payload: IStore['movie']) => {
    return {
        type: 'detailMovie/setDetailMovie',
        payload,
    }
}

export const loadDetailMovie = (id?: string) => async (dispatch: Dispatch) => {
    try {
        const response = await getMovieID(id);
        dispatch(setDetailMovieAction(response.data))
    } catch(e) {
        alert('An error occurred. Please try again.')
    }
}