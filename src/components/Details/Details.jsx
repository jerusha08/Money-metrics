import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement } from 'chart.js';
import Chart from 'chart.js/auto';
import useStyles from './styles';
import useTransactions from '../../useTransactions';


const Details=({title})=>{
const classes=useStyles();
const {total,chartData}=useTransactions(title);
const cardTitle = title === 'Income' ? 'Total Income' : 'Total Expense';

    return(
<Card className={title === 'Income' ? classes.income : classes.expense}>
    <CardHeader title={<Typography variant="h6"component="div" style={{ fontWeight: 'bold' }}>{cardTitle}</Typography>}/>
    <CardContent>
        <Typography variant="h5">Rs.{total}</Typography>
        {/*<div style={{
            backgroundImage:
              title === 'Income'
                ? 'url("/assets/money.png")'
                : 'url("/assets/expenses.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '200px', // Adjust the height of the card content as needed
          }}>*/}
        <Doughnut
    data={chartData}
    options={{
        plugins: {
            legend: {
                display: true,
                position: 'bottom', // You can adjust the position of the legend
            },
        },
        layout: {
            padding: {
                top: 10,
                bottom: 20,
                left: 20,
                right: 20,
            },
        },
        aspectRatio: 2.5, // Adjust the aspect ratio to change the chart size
        responsive: true,
    }}
/>


    </CardContent>
</Card>
    );
};
export default Details;