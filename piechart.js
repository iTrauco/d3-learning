var data = [
    {"platform":"Android", 
    "valjue":40.11},
    {"platform":"Windows", 
    "valjue":36.69},
    {"platform":"ios", 
    "valjue":43.96}
];

var svgWidth=500,
svgHeight = 300,
radius = Math.min(svgWidth, svgHeight) / 2;

var svg = d3.select(".mysvg")
    .attr("width",svgWidth)
    .attr("height",svgHeight);

//create a group element to hold the pie chart
var g = svg.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

    //built in color method
var color = d3.scaleOrdinal(d3.schemeCategory10)

//your 'percentage values can go over 100%.
//this computers the percentage based on the total of all values...
var pie = d3.pie().value(function(d) {
    return d.valjue
})

var path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0)

    //arcs, or sections of the pie are rendered in percentages....
    //what happens if you are over 100??
    //the creates an arc based on the % rturned from the pie(data) fucntion for each value
var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")

    //somehow this gets called for each arc??
    //yes, and it is creating svg elements with tons of detail....look at the renderer html
arc.append("path")
    .attr("d", path)   //length of the radius 
    .attr("fill",function(d) {return color(d.data.valjue);})