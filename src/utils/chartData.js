export function getChartData(...data) {
    return {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Vendas por mês',
            data: data,
            borderWidth: 1,
            backgroundColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'purple',
                'orange'
            ]
        }]
    };
}

export function getChartConfig(type) {
    return {
        type: type,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
}
