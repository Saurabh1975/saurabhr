// Set the dimensions of the canvas / graph
var margin = {top: 30, right: 20, bottom: 30, left: 0},
    width = 1800- margin.left - margin.right,
    height = 775 - margin.top - margin.bottom;


var roles = new Array( "designer", "engineer", 'builder','maker','technologist','researcher');
var roleTransitionTime = 750;
var transitionTime = 500;
var menuDelay = 500;
var menuTime = 300;
var pictureTime = 1500;
var startOffset = 1000

var menuOffset = 90;



var titleColor = '#464545';
// Adds the svg canvas
var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");


    svg.append("text")
        .text("Hi.")
        .style("stroke-width", "0.75px")
        .style("opacity", 1)
        .attr("dx", 8)
        .attr("dy", "1em")
        .attr('font-size','200px')
        .attr("transform", 
              "translate(" + 25+ "," + 0 + ")");


   svg.append("text")
        .text("I'm")
        .style("stroke-width", "0.75px")
        .style("opacity", 1)
        .attr("dx", 8)
        .attr("dy", "1em")
        .attr('font-size','48px')
        .attr("transform", 
              "translate(" + 200+ "," + 225 + ")");


   svg.append("text")
        .text("a")
        .style("stroke-width", "0.75px")
        .style("opacity", 1)
        .attr("dx", 8)
        .attr("dy", "1em")
        .attr('font-size','48px')
                       .style("opacity", 0)
        .attr("transform", 
              "translate(" + 275+ "," + 225 + ")")
        .transition()        
               .delay(startOffset)
               .style("opacity", 1)
        .transition()        
               .delay(startOffset+roleTransitionTime*(roles.length))
               .remove()
               .style("opacity", 0);


   svg.append("text")
        .text("Saurabh.")
        .style("stroke-width", "0.75px")
        .style("opacity", 0)
        .style('fill','#D46A6A')
        .style('stroke','#D46A6A')
        .attr("dx", 8)
        .attr("dy", "1em")
        .attr('font-size','64px')
                       .style("opacity",1 )
        .attr("transform", 
              "translate(" + 275+ "," + 213 + ")")
        .transition()        
               .delay(startOffset)
               .duration(100)
               .style("opacity",0 );

      
roles.forEach(function(d, i){
setTimeout(function(){
    svg.append("text")
        .text(d)
        .style("stroke-width", "0.75px")
        .style("opacity", 0)
        .style('fill','#D46A6A')
        .style('stroke','#D46A6A')
        .attr("dx", 8)
        .attr("dy", "1em")
        .attr('font-size','48px')
        .attr("transform", 
              "translate(" + 315+ "," + 225 + ")")
        .transition()        
               .style("opacity", 1)
               .delay(startOffset+ roleTransitionTime*i)
        .transition()        
               .style("opacity", 0)
               .delay(startOffset + roleTransitionTime*i+500);
            });



});


var nameStartTime = startOffset+roleTransitionTime*(roles.length+1);

   svg.append("text")
        .text("Saurabh.")
        .style("stroke-width", "0.75px")
        .style("opacity", 0)
        .style('fill','#D46A6A')
        .style('stroke','#D46A6A')
        .attr("dx", 8)
        .attr("dy", "1em")
        .attr('font-size','64px')
        .attr("transform", 
              "translate(" + 275+ "," + 213 + ")")
        .transition()        
               .duration(transitionTime)      
               .delay(nameStartTime)
               .style("opacity",1 );

/*for(i = 0; i<5; i++){
    svg.append("text")
        .text(roles[i])
        .style("stroke",'black')
        .style("stroke-width", "0.75px")
        .style("opacity", 0)
        .attr("dx", 8)
        .attr("dy", "1em")
        .attr('font-size','24px')
        .attr("transform", 
              "translate(" + 325+ "," + (275+i*30) + ")")
        .transition()        
               .duration(transitionTime)      
                .delay(3000+200*i)
               .style("opacity", 1)
               ;
}*/

    var pages = new Array( "Portfolio", " Blog", "About");
    var pageLinks = new Array( "http://saurabhr.com/portfolio/", "http://google.com", "http://google.com");

    svg.append("text")
        .text(pages[0])
        .attr("class", "navLink")               
        .style('fill','#407F7F')
        .style('stroke','#407F7F')
        .style('text-decoration','underline')
        .style("stroke-width", "0.75px")
        .style("opacity", 0)
        .attr("dx", 8)
        .on("click", function() { window.open("http://saurabhr.com/portfolio/"); })
        .attr("dy", "1em")
        .attr('font-size','24px')
        .attr("transform", 
              "translate(" + menuOffset+ "," + (450) + ")")
        .transition()        
                .duration(transitionTime)      
                .delay(nameStartTime+menuDelay+menuTime*0)
               .style("opacity", 1);

    svg.append("circle")        
        .attr("transform", 
              "translate(" + (menuOffset+130)+ "," + (467.5) + ")")
        .attr("r", 4)
                    .style("fill", titleColor)
        .style("stroke", titleColor) 
        .style('opacity',0)
        .transition()        
            .duration(transitionTime)      
            .delay(nameStartTime+menuDelay+menuTime*0.5)
            .style('opacity',1);

    svg.append("circle")        
        .style("fill", titleColor)
        .style("stroke", titleColor)        
        .attr("transform", 
              "translate(" + (menuOffset+235)+ "," + (467.5) + ")")
        .attr("r", 4)
        .style('opacity',0)
        .transition()        
            .duration(transitionTime)      
            .delay(nameStartTime+menuDelay+menuTime*1.5)
            .style('opacity',1);;


    svg.append("text")
        .text(pages[1])
                .attr("class", "navLink")               

        .style('fill','#407F7F')
        .style('stroke','#407F7F')
        .style('text-decoration','underline')
        .style("stroke-width", "0.75px")
        .style("opacity", 0)
        .attr("dx", 8)
        .on("click", function() { window.open("http://saurabhr.com/blog/"); })
        .attr("dy", "1em")
        .attr('font-size','24px')
        .attr("transform", 
              "translate(" + (menuOffset+150)+ "," + (450) + ")")
        .transition()        
               .duration(transitionTime)      
                .delay(nameStartTime+menuDelay+menuTime*1)
               .style("opacity", 1);

    svg.append("text")
        .text(pages[2])
                .attr("class", "navLink")               

                .style('fill','#407F7F')
        .style('stroke','#407F7F')
        .style('text-decoration','underline')
        .style("stroke-width", "0.75px")
        .style("opacity", 0)
        .attr("dx", 8)
        .on("click", function() { window.open("http://saurabhr.com/about/"); })
        .attr("dy", "1em")
        .attr('font-size','24px')
        .attr("transform", 
              "translate(" + (menuOffset+255)+ "," + (450) + ")")
        .transition()        
               .duration(transitionTime)      
                .delay(nameStartTime+menuDelay+menuTime*2)
               .style("opacity", 1);



var menuEndTime = nameStartTime+menuDelay+menuTime*2;

svg.append("svg:image") 
        .attr("xlink:href","SRPicture2.jpg")
        .attr('x',600)
        .attr('y',0)
        .attr('width',400)
        .attr('height', 187)
        .style("opacity",0)
        .transition()        
               .duration(transitionTime)      
               .delay(menuEndTime+300+pictureTime*.1)
               .style("opacity",1 );



svg.append("svg:image") 
        .attr("xlink:href","chart.jpg")
        .attr('x',600)
        .attr('y',197)
        .attr('width',400)
        .attr('height', 209)
        .style("opacity",0)
        .transition()        
               .duration(transitionTime)      
               .delay(menuEndTime+300+pictureTime*.2)
               .style("opacity",1 );

svg.append("svg:image") 
        .attr("xlink:href","cutting.jpg")
        .attr('x',600)
        .attr('y',416)
        .attr('width',400)
        .attr('height', 266)
        .style("opacity",0)
        .transition()        
               .duration(transitionTime)      
               .delay(menuEndTime+300+pictureTime*.3)
               .style("opacity",1 );


svg.append("svg:image") 
        .attr("xlink:href","HOPPER.jpg")
        .attr('x',1010)
        .attr('y',0)
        .attr('width',300)
        .attr('height', 318)
        .style("opacity",0)
        .transition()        
               .duration(transitionTime)      
               .delay(menuEndTime+300+pictureTime*.4)
               .style("opacity",1 );

svg.append("svg:image") 
        .attr("xlink:href","smilling.jpg")
        .attr('x',1010)
        .attr('y',328)
        .attr('width',300)
        .attr('height', 371)
        .style("opacity",0)
        .transition()        
               .duration(transitionTime)      
               .delay(menuEndTime+300+pictureTime*.5)
               .style("opacity",1 );

svg.append("svg:image") 
        .attr("xlink:href","SRPicture1.jpg")
        .attr('x',1320)
        .attr('y',0)
        .attr('width',300)
        .attr('height',353)
        .style("opacity",0)
        .transition()        
               .duration(transitionTime)      
               .delay(menuEndTime+300+pictureTime*.6)
               .style("opacity",1 );

svg.append("svg:image") 
        .attr("xlink:href","dashboard.png")
        .attr('x',1320)
        .attr('y',363)
        .attr('width',300)
        .attr('height',129)
        .style("opacity",0)
        .transition()        
               .duration(transitionTime)      
               .delay(menuEndTime+300+pictureTime*.7)
               .style("opacity",1 );

svg.append("svg:image") 
        .attr("xlink:href","protoFinal.png")
        .attr('x',1320)
        .attr('y',497)
        .attr('width',300)
        .attr('height',176)
        .style("opacity",0)
        .transition()        
               .duration(transitionTime)      
               .delay(menuEndTime+300+pictureTime*.7)
               .style("opacity",1 );