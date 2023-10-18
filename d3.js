// D3.js Chart
var width = 400;
var height = 400;
var radius = Math.min(width, height) / 2;

var svg = d3.select("#data-preprocessing-chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var data = [
    { label: "Data Collection", value: 35 },
    { label: "Data Preprocessing", value: 25 },
    { label: "Model Training", value: 26 },
    { label: "Inference", value: 14 }
];

var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie = d3.pie()
    .value(function (d) { return d.value; });

var path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var arc = svg.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");

arc.append("path")
    .attr("d", path)
    .attr("fill", function (d, i) { return color(i); });

arc.append("text")
    .attr("transform", function (d) { return "translate(" + path.centroid(d) + ")"; })
    .text(function (d) { return d.data.label; });
