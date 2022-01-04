// Import ES module
import { bar } from './britecharts/node_modules/britecharts/dist/umd/bar.min.js';

console.log(bar);

// Instantiate bar chart and container
const barChart = britecharts.bar();
const container = d3.select('.bar-container');

// Create Dataset with proper shape
const barData = [
    { name: 'Luminous', value: 2 },
    { name: 'Glittering', value: 5 },
    { name: 'Intense', value: 4 },
    { name: 'Radiant', value: 3 }
];

// Configure chart
barChart
    .margin({left: 100})
    .isHorizontal(true)
    .height(400)
    .width(600);

container.datum(barData).call(barChart);

