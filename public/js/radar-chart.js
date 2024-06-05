// import Chart from 'chart.js/auto'

// (async function () {
//     const labels = [
//         'Biceps',
//         'Triceps',
//         'Abdominals',
//         'Hamstrings',
//         'Quadriceps',
//         'Pectorals',
//         'Deltoids'
//     ];

//     new Chart(
//         document.getElementById('radar-chart'),
//         {
//             type: 'radar',
//             data: {
//                 labels: labels,
//                 datasets: [
//                     {
//                         label: 'Time (min)',
//                         data: [65, 59, 90, 81, 56, 55, 40],
//                         fill: true,
//                         backgroundColor: 'rgba(101, 170, 94, 0.2)',
//                         borderColor: 'rgb(101, 170, 94)',
//                         pointBackgroundColor: 'rgb(101, 170, 94)',
//                         pointBorderColor: '#fff',
//                         pointHoverBackgroundColor: '#fff',
//                         pointHoverBorderColor: 'rgb(101, 170, 94)'
//                     }
//                 ]
//             }
//         }
//     );
// })();
document.addEventListener('DOMContentLoaded', () => {
    const radarCtx = document.getElementById('radar-chart').getContext('2d');
        const labels = [
            'Biceps',
            'Triceps',
            'Abdominals',
            'Hamstrings',
            'Quadriceps',
            'Pectorals',
            'Deltoids'
        ];    
        new Chart(radarCtx, {
                type: 'radar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Time (min)',
                                data: [65, 59, 90, 81, 56, 55, 40],
                                fill: true,
                                backgroundColor: 'rgba(101, 170, 94, 0.2)',
                                borderColor: 'rgb(101, 170, 94)',
                                pointBackgroundColor: 'rgb(101, 170, 94)',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgb(101, 170, 94)'
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        r: {
                            beginAtZero: true
                        }
                    }
                }
        });
}); 