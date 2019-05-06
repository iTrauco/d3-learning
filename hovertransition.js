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
        
        //this works - if you click on a circle, they all turn yellow.
        // .on("click", function() {
        //     circle.transition().attr("fill","yellow")
        // })
        //this targets the circle that was clicked!!!!
        //this turns them yellow and moves a little further right and down.....
        .on("click", function(e) {
            // console.log()
            // console.log(this.r)
            // console.log(this.cy)
            d3.select(this)
            .transition().attr("fill",'yellow')
            .attr('cx', this.cx.baseVal.value + 10)
            .attr("cy",this.cy.baseVal.value + 10)
        })


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

var svg2 = d3.select(".trytwo")

var g = svg2.selectAll("g")
g.data(circledata)
    .enter()
    .append("g")
        .attr("transform",(d,i) => {
            return `translate(${(i+1)* 50},${(i+1)*50})`
        })
    .append("circle")
        .attr("r", (d,i) => { return Math.sqrt(parseInt(d)) })
        .attr("stroke","black")
        .attr("fill","aqua")
    //why do i need to reselect all of them??  
var g2 = svg2.selectAll("g")       
    g2.append("text")
        .text((d,i) => {return `click ${i}`})
        // .attr("text-anchor","middle4")
        .attr("stroke-width","2px")
        .attr("font-size", "10px")
        .attr("color", "red")
        //this works to center the text
        .attr("text-anchor","middle")

//you can simply this with a .each...
//https://stackoverflow.com/questions/13203897/d3-nested-appends-and-data-flow  


