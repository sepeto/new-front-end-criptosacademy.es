import React from 'react';
import { Line  } from 'react-chartjs-2';




function Graphics ({data}) {
    
    const dataGraph = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: data.getAllService[0].name,
                data: [13, 5, 13, 15, 20, 7],
                fill: false,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                ],
    
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    ], 
            },
        ],
    };
    
    const optionsGraph = {
        scales: {
            y: {
            beginAtZero: true
            }
        }
    };

    return (
        <div className="container-graphic container-style">
            <Line data={dataGraph} options={optionsGraph} height={450} width={600} />
        </div>
    );
};

export default Graphics;