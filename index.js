//why doesn't this work?????
// import d3 from 'd3'

let mydata = [30, 45, 576, 400, 234, 45];

 //this will run 6 times - once for each data point
//  .enter is like a create
 //create new div for each data point
//width equals the data in pixels
  //text equals the data point value

d3.select(".chart")
    .selectAll("div")
    .data(mydata)    
    .enter()           
    .append("p")                 //paragraph tags     
        .style("width", function(d) { return d + "px";})    
        .text(function(d) {return d;})   
    .append("div")                 //divs    
        .style("width", function(d) { return d + "px";})    
        .text(function(d) {return d;})  
    

// d3.select(".chart") //this doesn't duplicat???
//     .selectAll("div")
//     .data(mydata)    
//     .enter()   
//     .append("div")                 //divs    
//     .style("width", function(d) { return d + "px";})    
//     .text(function(d) {return d;})  

let dataset = [30,40,50,20,100,90,50,30]
//by default .sort() sorts like they are strings!!!!
// dataset.sort((a,b) => {return a-b});
let svgWidth = 520, svgHeight = 300, barPadding=5;
let barWidth = (svgWidth / dataset.length);

//you would really need to make sure that the width is not negative (including padding)
//and that the svg area is sized appropriately.

 //adding scales....
 //WHAT DOES THIS APPLY TO???  I HAVE 2 D3 ELEMENTS
 //this doesn't change anyting.  
 //we use the yScale value in th4e 'y' attribute below
 //this is a function called below:

 //i think yScale is essentially creating a line that is a 1:1 map from domain to range...
 //so plugging in your value - gives you the y position for that range.

 //this allows you to fit your data into a defined area. - the maxHeight will be pinned to the maximum
 //dataset value.  then the width of each is calculated above.

 //we also use the xScale and yScale for our axises
 var yScale = d3.scaleLinear()
            .domain([0,d3.max(dataset)])            
            .range([0,svgHeight]);

// console.log(yScale(4))
var xScale = d3.scaleLinear()
            .domain([0,d3.max(dataset)])
            .range(0,svgWidth)

            //we use these values in a group tag that we append to our svg
            //i think the axis functions actually create svg objects
var x_axis = d3.axisBottom()
    .scale(xScale);

    // console.log(x_axis);
var y_axis = d3.axisLeft()
        .scale(yScale)          //provides the min/max



//select the svg element that exists inour html
//we can do this with .select "svg"
//or on the classname of the svg element:
// let svg = d3.select("svg")
let svg = d3.select(".mysvg ")
            .attr("width",svgWidth)
            .attr("height",svgHeight)

            //create a rectangle inside the svg for each data element
            //it is painting them from the top left down....
let barChart = svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append("rect")
            .attr("y",function(d) {return svgHeight - yScale(d)})
            .attr("height",function(d) {return yScale(d)})
            .attr("width",barWidth - barPadding)
            //translate moves each sequential bar to the right
            .attr("transform",function(d,i) {
                var translate = [barWidth * i, 0];
                return "translate(" + translate +")";
                
            })

//append labels to our bar chart:
//there are no text elements to start...
//x and y are the start positoins (probably top left corner??), he lowers it 2.
//x and y are counting positively from the upper left corner.  like pygame...
var text = svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text(function(d) {
                return d;
            })
            .attr("y",function(d, i ) {
                return svgHeight - d - 2;
            })
            .attr("x", function(d,i) {
                return barWidth * i
            })

//axises
//4 methods for creating axises:  d3.
//.axisTop(), .axisRight(), .axisBottom(), .axisLeft()
//we created the axis svg objects above
//then we append them to the svg

let svg2 = d3.select(".mysvg2 ")
            .attr("width",svgWidth)
            .attr("height",svgHeight)

            //mine go backwards???
svg2.append("g")
    .attr("transform", "translate(50, 10)")     //moves it over 50% to the left and 10% from the top
    .call(y_axis)

var xAxisTranslate = svgHeight - 20;
//this throws and error?????

svg2.append("g")
    .attr("transform","translate(50, " + xAxisTranslate + ")")
    // .attr("transform", "translate(50, 10)")
    // .attr(`"transform","translate(50, " ${xAxisTranslate}")"`)
    .call(x_axis)

