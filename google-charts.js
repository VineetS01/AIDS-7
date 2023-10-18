google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    // Data for Google Charts
    var data = google.visualization.arrayToDataTable([
        ['Step', 'Percentage'],
        ['Data Collection', 25],
        ['Data Preprocessing', 20],
        ['Model Training', 30],
        ['Inference', 25]
    ]);

    var options = {
        title: 'Steps for Cognitive App Development',
        pieHole: 0.4,
    };

    // Draw Google Chart
    var chart = new google.visualization.PieChart(document.getElementById('data-collection-chart'));
    chart.draw(data, options);
}
