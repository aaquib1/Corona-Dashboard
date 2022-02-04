import { Box, CircularProgress, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Card from './Card';

const useStyle = makeStyles({
    component: {
        margin: '50px 0',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    container: {
        color: '#8ACA28',
        marginBottom: 25
    }
})

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    // debugger
    const classes = useStyle();
    if (!confirmed) {
        return <CircularProgress />
    }
    return (
        <Box className={classes.component}>
            <Typography className={classes.container} variant='h4' gutterBottom>Coronavirus Cases Globally</Typography>
            <Grid container spacing={3} justify='center'>
                <Card
                    cardTitle="Infacted"
                    value={confirmed.value}
                    desc="Number of Infected Cases of Covid-19"
                    lastUpdate={lastUpdate}
                />
                <Card
                    cardTitle="Recovered"
                    value={recovered.value}
                    desc="Number of Recovered Cases from Covid-19"
                    lastUpdate={lastUpdate}
                />
                <Card
                    cardTitle="Deaths"
                    value={deaths.value}
                    desc="Number of Deaths Caused by Covid-19"
                    lastUpdate={lastUpdate}
                />
            </Grid>
        </Box>
    );
};

export default Cards;
