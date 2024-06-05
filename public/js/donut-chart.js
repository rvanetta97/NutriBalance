import Chart from 'chart.js/auto'

(async function () {
      const labels = [
        'Calories',
        'Fat',
        'Protein'
      ];

    new Chart(
        document.getElementById('donut-chart'),
        {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Nutrition',
                        data: [300, 50, 100],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                          ],
                          hoverOffset: 4
                    }
                ]
            }
        }
    );
})();

// document.addEventListener('DOMContentLoaded', () => {
//     const labels = [
//         'Calories',
//         'Fat',
//         'Protein'
//       ];
//     const donutCtx = document.getElementById('donut-chart').getContext('2d');
//     new Chart(donutCtx, {
//         type: 'doughnut',
//         data: {
//             labels: chartData.donut.labels,
//             datasets: [{
//                 data: chartData.donut.data,
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//                 hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
//             }]
//         },
//         options: {
//             responsive: true
//         }
//     });
// });