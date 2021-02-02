import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Working on dashboard',
		'Eating',
		'Sleeping'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const DoughnutExample = () => {
//   displayName: 'DoughnutExample',
    return (
      <div>
        <h2>Routine</h2>
        <Doughnut data={data} />
      </div>
    );
};

export default DoughnutExample