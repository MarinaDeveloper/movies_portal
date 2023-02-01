import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import routeMovieDetail from "./routes";

import { useTypedDispatch, useTypedSelector } from "store";
import { loadDetailMovie } from "store/detailMovie/actions";
import { selectDetail } from "store/detailMovie/selectors";

import DateView from "components/DateView";
import { Grid, Stack, Skeleton, Typography, TableBody, Table, TableCell, TableRow } from "@mui/material";

import { ID } from "types/ID";

import noPhoto from 'assets/image/no-photo.png';
import star from 'assets/image/star.png';

const MovieDetail = () => {
    const [skelClass, setSkelClass] = useState('block');
    const [imgClass, setImgClass] = useState('none');

    const {id} = useParams<ID>();

    const dispatch = useTypedDispatch();
    const movie = useTypedSelector(selectDetail);

    const createSummary = () => {
        const summary = movie?.summary ? `${movie.summary}` : '—';
        return {__html: summary};
    }

    useEffect(() =>{
        dispatch(loadDetailMovie(id));
    }, [id, dispatch])

    return (
        <section>
            {movie ? (
                <Grid container spacing={3} sx={{mb: '40px'}} >
                    <Grid item xs={4} md={3} >
                        <Skeleton variant="rounded" width='100%' height={200} sx={{display: skelClass, borderRadius: '20px'}}/>
                        <img
                            src={movie.image ? movie.image.original : noPhoto}
                            alt='Movie poster'
                            onLoad={() => {
                                setSkelClass('none');
                                setImgClass('block');
                            }}
                            style={{
                                display: `${imgClass}`,
                                width: '100%',
                                borderRadius: 20,
                            }}
                        />
                    </Grid>
                    <Grid item xs={8} md={9} >
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Typography variant="h5" component="h5" sx={{fontWeight: '700'}}>{movie.name}</Typography>
                            <Stack alignItems="center" direction="row">
                                <img src={star} alt="rating"/>
                                <Typography component="p" ml={1}>{movie.rating.average ? `${movie.rating.average}` : '—'}/10</Typography>
                            </Stack>
                        </Stack>
                        <Table >
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">Year</TableCell>
                                    <TableCell scope="row"><DateView date={movie.premiered} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Country</TableCell>
                                    <TableCell scope="row">{movie.network ? `${movie.network.country.name}` : '—'}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Genre</TableCell>
                                    <TableCell scope="row">{movie.genres.join(', ')}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>) : (
                <Grid container spacing={2} sx={{mb: '40px', pb: '50px'}}>
                    <Grid item xs={4} md={3}>
                        <Skeleton variant="rounded" width='100%' height='150%' />
                    </Grid>
                    <Grid item  xs={8} md={9} >
                        <Skeleton/>
                        <Skeleton/>
                        <Skeleton/>
                        <Skeleton/>
                    </Grid>
                </Grid>
            )}
            {movie ? (
                <Stack direction="column" mb={5}>
                    <Typography variant="h5" component="h5" sx={{fontWeight: '700'}} mb={2}>Description</Typography>
                    <Typography component="p" dangerouslySetInnerHTML={createSummary()}></Typography>
                </Stack>
            ) : (
                <Skeleton variant="rounded" width='100%' height={80} sx={{mb: '40px'}}/>
            )}
        </section>
    );
}

export {routeMovieDetail};

export default MovieDetail;