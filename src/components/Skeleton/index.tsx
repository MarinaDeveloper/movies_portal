import * as React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

interface ISkeletonParams {
    h: number;
}

const SkeletonMovie = ({h} : ISkeletonParams) => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={4} md={2}>
            <Skeleton variant="rounded" width='100%' height={h} />
            <Skeleton />
            <Skeleton width="60%" />
        </Grid>
        <Grid item xs={4} md={2}>
            <Skeleton variant="rounded" width='100%' height={h} />
            <Skeleton />
            <Skeleton width="60%" />
        </Grid>
        <Grid item xs={4} md={2}>
            <Skeleton variant="rounded" width='100%' height={h} />
            <Skeleton />
            <Skeleton width="60%" />
        </Grid>
        <Grid item xs={4} md={2}>
            <Skeleton variant="rounded" width='100%' height={h} />
            <Skeleton />
            <Skeleton width="60%" />
        </Grid>
        <Grid item xs={4} md={2}>
            <Skeleton variant="rounded" width='100%' height={h} />
            <Skeleton />
            <Skeleton width="60%" />
        </Grid>
        <Grid item xs={4} md={2}>
            <Skeleton variant="rounded" width='100%' height={h} />
            <Skeleton />
            <Skeleton width="60%" />
        </Grid>
    </Grid>
  );
}

export default SkeletonMovie;