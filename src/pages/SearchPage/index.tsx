import React, { useState, useEffect } from "react";
import routeSearch from "./routes";

import { useTypedDispatch, useTypedSelector } from "store";
import { loadMoviesSearch } from "store/movie/actions";
import { selectListSearch } from "store/movie/selectors";
import { selectStatus } from "store/movie/selectors";

import MovieItem from "components/MovieItem";

import {Paper, IconButton, InputBase, Alert, Snackbar, Stack, AlertTitle, Box, Grid} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { IMovieItem } from "types/IMovieItem";

const SearchPage = () => {
    const dispatch = useTypedDispatch();
    const moviesList = useTypedSelector(selectListSearch);
    const downloadStatus = useTypedSelector(selectStatus);

    const [search, setSearch] = useState<IMovieItem[]>([]);
    const [initialBlock, setInitialBlock] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [open, setOpen] = useState(false);

    const getValueInput = (e: any) => {
        setInputValue(e.target.value);
    }

    const startSearch = () => {
        if(inputValue) {
            dispatch(loadMoviesSearch(inputValue));
        } else {
            setOpen(true);
        }
    }

    useEffect(() => {
        if(downloadStatus === 'succeeded') {
            setSearch(moviesList);
            setInitialBlock(false);
        }
    }, [moviesList, downloadStatus])

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <section>
            <Paper
                component="form"
                sx={{ p: '9px 20px', display: 'flex', alignItems: 'center', width: '100%', borderRadius: '20px'}}
                onSubmit={(e) => {
                    e.preventDefault();
                    startSearch()
                }}
                >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Movie"
                    onChange={getValueInput}
                />
                <IconButton type="button" sx={{ p: '10px' }} onClick={startSearch} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            {initialBlock ?
                <Box minHeight={350}>
                    <Alert severity="info" sx={{marginTop: '50px', fontSize: '16px'}}>
                        <AlertTitle sx={{fontSize: '20px'}}><strong>Info</strong></AlertTitle>
                        Please <strong>enter</strong> a movie title and <strong>click</strong> the search button!
                    </Alert>
                </Box> :
                <div className="result_wrapper">
                    {search.length > 0 ?
                        <Stack direction="column" spacing={2} sx={{mt: '20px'}}>
                            <Alert severity="success" sx={{fontSize: '16px'}}>
                                <AlertTitle sx={{fontSize: '20px'}}><strong>Success</strong></AlertTitle>
                                Your search for <strong>{inputValue}</strong> found <strong>{search.length}</strong> results!
                            </Alert>
                            <Grid container spacing={2} width='100%'>
                                {search.map((item, index) => <MovieItem movie={item.show} h={160} key={index}/>)}
                            </Grid>
                        </Stack> :
                        <Box minHeight={350}>
                            <Alert severity="error" sx={{marginTop: '50px', fontSize: '16px'}}>
                                <AlertTitle sx={{fontSize: '20px'}}><strong>Error</strong></AlertTitle>
                                Unfortunately, nothing was found for your request!
                            </Alert>
                        </Box>   
                    }
                </div>
            }
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '300px' }}>
                    <AlertTitle>Warning</AlertTitle>
                    Please <strong>enter</strong> the title of the movie!
                </Alert>
            </Snackbar>
        </section>
    )
}    

export {routeSearch};

export default SearchPage;