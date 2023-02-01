import { IMovieShowItem } from "types/IMovieItem";
import { IMovieItem } from "types/IMovieItem";

export interface IStore {
    allList: IMovieShowItem[];
    listMovies: IMovieItem[];
    status: string;
}