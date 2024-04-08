var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Earning in N',
            data: [2050, 1900, 2100, 1000, 2000, 3500,3400, 5000, 6000,2300,4500,5000],
            backgroundColor: [
                'rgba(85, 85, 85, 1)',
                
            ],
            borderColor: [
                'rgb(41, 155, 99)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});