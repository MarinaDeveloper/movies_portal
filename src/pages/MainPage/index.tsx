import React, { useEffect, useState} from "react";
import routeMain from "./routes";

import { useTypedDispatch, useTypedSelector } from "store";
import { loadAllMovies } from "store/movie/actions";
import { selectAllList } from "store/movie/selectors";

import GenresItem from "components/GenresItem";

import { IMovieShowItem } from "types/IMovieItem";

const MainPage = () => {
    const dispatch = useTypedDispatch();
    const allMoviesList = useTypedSelector(selectAllList);

    const [movies, setMovies] = useState<IMovieShowItem[]>([]);

    useEffect(() => {
        dispatch(loadAllMovies());
    }, [dispatch])

    useEffect(() => {
        if(allMoviesList.length > 0) {
            setMovies(allMoviesList);
        }
    }, [allMoviesList])

    return (
        <section>
            <GenresItem genres="Comedy" moviesList={movies}/>
            <GenresItem genres="Drama" moviesList={movies}/>
            <GenresItem genres="Thriller" moviesList={movies}/>
            <GenresItem genres="Action" moviesList={movies}/>
        </section>
    );
}

export {routeMain};

export default MainPage;