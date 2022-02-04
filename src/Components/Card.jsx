import { Box, CardContent, Grid, Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Countup from 'react-countup'

const UseStyles = makeStyles({
    header: {
        background: '#F5F5F5',
        padding: 10
    }
})

const cardComponent = ({ cardTitle, value, desc, lastUpdate }) => {
    const classes = UseStyles();
    return (
        <Grid component={Card} style={{ margin: 20, borderBottom: '10px solid yellow' }} >
            <Box className={classes.header}>
                <Typography variant='h5' color='textSecondary'>{cardTitle}</Typography>
            </Box>
            <CardContent>
                <Typography variant='h5'>
                    <Countup start={0} end={value} duration={3} separator=',' />
                </Typography>
                <Typography color='textSecondary' >{desc}</Typography>
                <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
    );
};

export default cardComponent;
