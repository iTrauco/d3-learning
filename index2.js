//more svg practice exampls from scrimba.com

var svgWidth=600, svgHeight=500;
var svg = d3.select(".mysvg")
    .attr("width",svgWidth)
    .attr("height",svgHeight)
    .attr("class","svg-container")  
    //can I add this?, yes, but it actuall overrides my initial class,
            //even though I targeted with that....wierd

var line = svg.append("line")
    .attr("x1",100)
    .attr("x2",500)
    .attr("y1",50)
    .attr("y2",50)
    .attr("stroke","red")   //won't show up without color!!!

//create rectangle

var rect = svg.append("rect")
    .attr("x", 100)         // left start position
    .attr("y", 100)         //top start position
    .attr("width",200)
    .attr("height",100)
    .attr("fill","#3395ff")

    // console.log("Hello");

    //if you put the dimensions outside of the svg - they will not appear, or they will be chopped!
var circle = svg.append("circle")
    .attr("cx",250)  //middle of circle
    .attr("cy",450)
    .attr("r",80)
    .attr("fill","#78eb23")