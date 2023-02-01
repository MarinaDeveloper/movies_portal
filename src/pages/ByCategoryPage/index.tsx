import React, {useState, useEffect} from "react";
import routeFilms from "./routes";

import { useTypedDispatch, useTypedSelector } from "store";
import { loadAllMovies } from "store/movie/actions";
import { selectAllList } from "store/movie/selectors";

import MovieItem from "components/MovieItem";

import {Box, Button, Paper, TextField, Autocomplete, Alert, AlertTitle, Stack, Snackbar, Grid} from "@mui/material";

import dataGenres from 'data/dataGenres';
import { IMovieShowItem } from "types/IMovieItem";

const ByCategoryPage = () => {
    const dispatch = useTypedDispatch();
    const allMoviesList = useTypedSelector(selectAllList);

    const [inputValue, setInputValue] = useState('');
    const [search, setSearch] = useState<IMovieShowItem[]>([]);
    const [initialBlock, setInitialBlock] = useState(true);
    const [open, setOpen] = useState(false);

    const getValueInput = (e: any) => {
        setInputValue(e.target.value);
    }

    const startSearch = () => {
        if (inputValue) {
            const correctedQuery = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
            const result = allMoviesList.filter(movie => {
                return (movie.genres.includes((correctedQuery), 0))
            })
            setSearch(result);
            setInitialBlock(false);
        } else {
            setOpen(true);
        }
    }

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(loadAllMovies());
    }, [dispatch])

    return (
        <section>
            <Stack spacing={3} direction="row" alignItems='center'>
                <Paper
                    elevation={3} 
                    component="form"
                    sx={{ p: '9px 20px', display: 'flex', alignItems: 'center', width: '50%', borderRadius: '20px', backgroundColor: '#ECF0F9'}}
                    onSubmit={(e) => {
                        e.preventDefault();
                        startSearch();
                    }}
                    >
                    <Autocomplete
                        sx={{width: '100%'}}
                        options={dataGenres}
                        id="auto-complete"
                        autoComplete
                        onChange={(event, value) => setInputValue(value!)}
                        renderInput={(dataGenres) => <TextField {...dataGenres} label="example: Drama" variant="standard" onChange={getValueInput} value={inputValue} />}
                    />
                </Paper>
                <Button variant="contained" sx={{width: '150px', height: '50px', fontSize: '18px'}} onClick={startSearch}>Search</Button>
            </Stack>
            {initialBlock ?
                <Box minHeight={350}>
                    <Alert severity="info" sx={{marginTop: '50px', fontSize: '16px'}}>
                        <AlertTitle sx={{fontSize: '20px'}}><strong>Info</strong></AlertTitle>
                        Please <strong>select</strong> a movie genre and <strong>click</strong> the search button!
                    </Alert>
                </Box>
            :
                <Box>
                    {search.length > 0 ? 
                        <Stack direction="column" spacing={2} sx={{mt: '50px'}}>
                            <Alert severity="success" sx={{fontSize: '16px'}}>
                                <AlertTitle sx={{fontSize: '20px'}}><strong>Success</strong></AlertTitle>
                                There are <strong>{search.length}</strong> results for the genre <strong>{inputValue}</strong>!
                            </Alert>
                            <Grid container spacing={2} width='100%'>
                                {search.map((item, index) => <MovieItem movie={item} h={160} key={index}/>)}
                            </Grid>
                        </Stack>
                    :
                        <Box minHeight={350}>
                            <Alert severity="error" sx={{mt: '50px', fontSize: '16px'}}>
                                <AlertTitle sx={{fontSize: '20px'}}><strong>Error</strong></AlertTitle>
                                Unfortunately, nothing was found for the selected genre!
                            </Alert>
                        </Box>
                    }
                </Box>
            }
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '300px' }}>
                    <AlertTitle>Warning</AlertTitle>
                    Please select <strong>a genre!</strong>
                </Alert>
            </Snackbar>
        </section>
    )
}

export {routeFilms};

export default ByCategoryPage;