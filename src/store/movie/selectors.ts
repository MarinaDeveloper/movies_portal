import { IStore } from "./types";

export const selectAllList = (state: {moviesReducer : IStore}) => state.moviesReducer.allList;
export const selectListSearch = (state: {moviesReducer : IStore}) => state.moviesReducer.listMovies;
export const selectStatus = (state: {moviesReducer: IStore}) => state.moviesReducer.status;