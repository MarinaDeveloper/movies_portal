import { IStore } from "./types";

export const selectDetail = (state: {detailMovieReducer: IStore}) => state.detailMovieReducer.movie;