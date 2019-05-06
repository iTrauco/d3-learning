// const url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31?end=2018-04-01'

// import axios from 'axios';
//import doesn't work in browser side javascipt...this is a node, npm method!


// document.addEventListener("DOMContentLoaded",  (e) => {
//    fetch(url)
//    .then((response) => {return response.json();})
//    .then((data) => {
//         const parsedData = parseData(data);
//         drawChart(parsedData);
//         console.log(parsedData);
//     })
//     .catch((err) => {console.log(err)})
// });

const rawdata = {"bpi":{"2019-04-04":4917.8467,"2019-04-05":5053.72,"2019-04-06":5058.34,"2019-04-07":5208.02,"2019-04-08":5296.9317,"2019-04-09":5196.985,"2019-04-10":5319.705,"2019-04-11":5046.865,"2019-04-12":5088.7483,"2019-04-13":5077.7183,"2019-04-14":5172.4517,"2019-04-15":5033.095,"2019-04-16":5214.55,"2019-04-17":5237.38,"2019-04-18":5290.7433,"2019-04-19":5297.5667,"2019-04-20":5326.9383,"2019-04-21":5305.9967,"2019-04-22":5396.5783,"2019-04-23":5540.1117,"2019-04-24":5454.4483,"2019-04-25":5160.64,"2019-04-26":5241.025,"2019-04-27":5247.24,"2019-04-28":5266.3467,"2019-04-29":5259.6267,"2019-04-30":5378.6183,"2019-05-01":5423.66,"2019-05-02":5503.3017,"2019-05-03":5775.8817,"2019-05-04":5876.01}}

function parseData(data) {
    var arr = [];
    for (var i in data.bpi) {
        arr.push({
            date: new Date(i),
            value: +data.bpi[i]
        })
    }
    return arr;
}


function drawChart(data)  {
    var svgWidth = 1000, svgHeight=400;
    var margin = {top: 20, right:20, bottom:30, left:50}
    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    var svg = d3.select('svg')
        .attr('width', svgWidth)
        .attr("height", svgHeight)

    var g = svg.append("g")
        .attr("transform", `translate ( ${margin.left}, ${margin.top})`);

        //why don't we need to enter the date range in here?
        // but this is time duraing on the x axis
        //this is done in the .domain part of the line below?
    var x = d3.scaleTime()
        .rangeRound([0,width])

        //doesn't it need a max value to scale to?
    var y = d3.scaleLinear()
        .rangeRound([height, 0])

        //this assigns the value of x as a date, via the scaleTime method defined above.
    var line = d3.line()
        .x(function(d) {return x(d.date)})  //converts the date a relative point on the map
        .y(function(d) {return y(d.value)})

        //this lets d3 know the DOMAIN of the data when it is passed to the scale function!
        //extent returns the min and max values to the scaleTime and scaleLinear functions.
        //not sure why we didn't just set them above?
        //min and max are used to create the scale properly.
        x.domain(d3.extent(data, function(d) {return d.date}))
        y.domain(d3.extent(data, function(d) {return d.value}))

        //this sets the axis for the bottom 
    g.append('g')
        .attr("transform",`translate(0, ${height})`)
        .call(d3.axisBottom(x))
        .select(".domain")
        .remove()

    //this sets the axis for the right, using our y value above
    g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill","none")
        .attr("transform","rotate(-90)")
        .attr("y",6)
        .attr("dy","0.71em")
        .attr("text-anchor","end")
        .text("Price($)");

    g.append("path")
        .datum(data)
        .attr("fill","none")
        .attr("stroke","steelblue")
        .attr("stroke-linejoin","round")
        .attr("stroke-width", 1.5)
        .attr("d",line)
        
    }

    const parsedData = parseData(rawdata)
console.log(parsedData);
    drawChart(parsedData);