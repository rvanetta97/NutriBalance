import Chart from 'chart.js/auto'

(async function () {

    const labels = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    new Chart(
        document.getElementById('line-graph'),
        {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Calories Burned',
                        data: [150, 300, 275, 180, 157, 203, 216],
                        fill: false,
                        borderColor: 'rgb(101, 170, 94)',
                        tension: 0.1
                    }
                ]
            }
        }
    );
})();

// document.addEventListener('DOMContentLoaded', () => {
//     // Line Chart

//         const labels = [
//             'Monday',
//             'Tuesday',
//             'Wednesday',
//             'Thursday',
//             'Friday',
//             'Saturday',
//             'Sunday'
//         ];
    
//         new Chart(
//             document.getElementById('line-graph'),
//             {
//                 type: 'line',
//                 data: {
//                     labels: labels,
//                     datasets: [
//                         {
//                             label: 'Calories Burned',
//                             data: [150, 300, 275, 180, 157, 203, 216],
//                             fill: false,
//                             borderColor: 'rgb(101, 170, 94)',
//                             tension: 0.1
//                         }
//                     ]
//                 }
//             }
//         );
// })();
