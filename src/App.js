import React, { Component } from 'react';
import { Box, Card, withStyles, Typography } from '@material-ui/core'
import logo from './images/COVID19.jpg';
import Cards from './Components/Cards';
import { fetchdata } from './Services/api'
import Countries from './Components/Countries';
// import { Chart } from 'react-chartjs-2';
import Chart from './Components/Chart';

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  header: {
    background: '#F5F5F5',
    width: 400,
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: '#777'
  },
  lastUpdated: {
    color: '#777',
    fontSize: 14
  }
}

class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchdata();
    this.setState({ data: fetchedData })
    console.log(fetchedData);
    // debugger
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchdata(country);
    this.setState({ data: fetchedData, country: country })
    console.log(fetchedData);
  }

  render() {
    const { data } = this.state;
    return (
      <Box className={this.props.classes.container}>
        <Box className={this.props.classes.header}>COVID - 19 CORONAVIRUS PANDEMIC</Box>
        <Typography className={this.props.classes.lastUpdated}>Last Updated: {data.lastUpdate && new Date(data.lastUpdate).toDateString()}</Typography>
        <img style={{ width: 350 }} src={logo} alt='covid19' />
        <Cards data={data} />
        <Countries handleCountryChange={this.handleCountryChange} />
        <Chart data={data} />
      </Box>
    );
  }
}

export default withStyles(style)(App);