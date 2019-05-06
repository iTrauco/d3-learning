var svg = d3.select("svg")

//from bost.ocks.org/mike/circles

circledata = [900,323, 1400,800]

//this will bind the data to any existing <circle tags that may exist,
//any extra valus will create NEW circle tags withing the svg element.
// but the circle variable ONLY contains the ADDITIONAL elements

var circle = svg.selectAll("circle") //tells the circle elements are inside the svg
    //even if none exist yet.  if they do exist, it appends more to match the .data array length

    circle.data(circledata)
    .enter()
    .append("circle")
    .attr("r", (d,i) => { return Math.sqrt(parseInt(d)) })
    .attr("cx", () => {return Math.random() * 720})
    .attr("cy", (d,i) => { return i * 50})
    .attr("stroke","black")
    .attr("fill","steelblue")

    //reselect all the circles, so you can modify them later...
    circle = d3.selectAll("circle");

    //this reloads the data - here with just one circle
    //and removes the other circle elements
    // circle.data([1000])
    //     .exit().remove();


    // d3.select(".chart")
    // .selectAll("div")
    // .data(mydata)    
    // .enter()           
    // .append("p")                 //paragraph tags     
    // .style("width", function(d) { return d + "px";})    
    // .text(function(d) {return d;})   
    // .append("div")                 //divs    
    // .style("width", function(d) { return d + "px";})    
    // .text(function(d) {return d;})  

// console.log(circle);

// var circle = d3.selectAll("circle");

//enter() and exit()
//from the tutorial:
// If there are more data than elements, the extra data are in the enter selection. And if there are fewer data than elements, the extra elements are in the exit selection.

//this will get added AFTER the initial DOM load, so if you have a css duration on the transition, you will see it.
d3.select("body")
    .transition()
    .style("background-color","red")

//now we BIND the data to the circles
//data is specified as an array of values; this mirros the concet of the selection, which is an array of elements, (circles in this case)
// circle.data(circledata);

setInterval(() => {
    circle.attr("r", (d) => {return Math.sqrt(d) })
    circle.attr("cx", () => {return Math.random() * 720;})
    circle.attr("cy", (d,i) => { return i * 50})
    
    
}, 500);