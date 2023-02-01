import React, {useState, useEffect} from 'react';

import MovieItem from 'components/MovieItem';
import SkeletonMovie from 'components/Skeleton';
import Grid from '@mui/material/Grid';

import { IMovieShowItem } from "types/IMovieItem";

import icon from 'assets/image/film-reel.png';
import './styles.scss';

interface IGenresItemParams {
    genres: string;
    moviesList: IMovieShowItem[]
}

const GenresItem = ({genres, moviesList} : IGenresItemParams ) => {
    const [search, setSearch] = useState<IMovieShowItem[]>([]);

    useEffect(() => {
        if(moviesList.length > 0) {
            const result = moviesList.filter(movie => {
                return (movie.genres.includes((genres), 0))
            })
            setSearch(result);
        }
    }, [moviesList, genres])

    return (
        <div className='genres_wrapper'>
            <div className='genres_title'>
                <img src={icon} alt='movie icon'/>
                <h4>{genres}</h4>
            </div>
            {search.length > 0 ?
                <Grid container spacing={2}>
                    {search.slice(0,6).map((item, index) => <MovieItem movie={item} h={160} key={index}/>)}
                </Grid> :
                <SkeletonMovie h={160}/>
            }
        </div>
    )
}

export default GenresItem;