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