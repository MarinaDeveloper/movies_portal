import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import DateView from 'components/DateView';
import {Skeleton, Grid} from '@mui/material';

import { IMovieShowItem } from 'types/IMovieItem';
import './styles.scss';

interface IMovieItemParams {
    movie: IMovieShowItem;
    h: number;
}

const MovieItem = ({movie, h}: IMovieItemParams) => {
    const [skelClass, setSkelClass] = useState('block');

    return (
    <Grid item xs={4} md={2} sx={{mb: '40px'}}>
        <Link className="movie_link" to={`/films/${movie.id}`}>
            <Skeleton variant="rounded" width='100%' height={h} sx={{display: skelClass, borderRadius: '20px'}}/>
            <img src={movie.image?.medium} alt='Movie poster' onLoad={() => setSkelClass('none')} className={skelClass}/>
            <div className="short-mask"></div>
        </Link>
        <div className='movie_info'>
            <h5>{movie.name}</h5>
            <div className='movie_info_block'>
                <DateView date={movie.premiered} />
                {movie.network?.country && <p className="movie_info_country">{`(${movie.network?.country.name})`}</p>}
            </div>
        </div>
    </Grid>
    )
}

export default MovieItem;