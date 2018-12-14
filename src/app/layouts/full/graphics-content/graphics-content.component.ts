import { Component, OnInit, AfterContentInit } from '@angular/core';

import * as d3 from 'd3';

// services
import { MachineService } from '../../../services/machine.service';
@Component({
  selector: 'app-graphics-content',
  templateUrl: './graphics-content.component.html',
  styleUrls: ['./graphics-content.component.css']
})
export class GraphicsContentComponent implements OnInit, AfterContentInit {

  constructor( public _machineService: MachineService ) { }

  ngOnInit() {

  }

    // using d3.js
  ngAfterContentInit() {
    // Another example using D3
    this.drawCirclesRect();

    const dataChart = [
      { date: '10/26/2018', value: 3 },
      { date: '10/27/2018', value: 0 },
      { date: '10/29/2018', value: 5 },
      { date: '10/28/2018', value: 8 },
      { date: '11/01/2018', value: 7 },
      { date: '11/02/2018', value: 11 },
      { date: '11/03/2018', value: 23 },
      { date: '11/07/2018', value: 13 },
      { date: '12/05/2018', value: 15 },
      { date: '12/14/2018', value: 37 },
      { date: '12/15/2018', value: 32 },
      { date: '12/16/2018', value: 38 },
    ];

    const margin = 50;
    const width = 700;
    const height = 350;

    let dataGroup = d3.select('#card2').append('svg')
        // add id linearChart
        .attr('id', '#linearChart')
        .attr('width', width + 2 * margin )
        .attr('height', height + 2 * margin)
        .append('g')
        .attr('transform', 'translate(' + margin + ', ' + margin + ')');

        // get values of date for mapping of X
          function x(d) {
            return d[0];
          }

          // get values of value for mapping of Y
          function y(d) {
            return d[0];
          }

          const line = d3.line()
            .x( function(d) { return (d.date); })
            .y( function(d) { return (d.value); })
            ;

          const parseTime = d3.timeParse('%m/%d/%Y');

          dataChart.forEach(function(d) {
            d.date = parseTime(d.date);
          });

          const xAx = d3.scaleTime()
          // d3.extent return minimun and max value of and array
            .domain(d3.extent(dataChart, function(d) { return d.date; }))
            .range([0, width]);

          const yAx = d3.scaleLinear()
          // d3.extent return minimun and max value of and array
            .domain(d3.extent(dataChart, function(d) { return d.value; }))
            .range([height, 0]);

           dataGroup.append('path')
                  .data([dataChart])
                  .attr('fill', 'none')
                  .attr('stroke', '#00FF00')
                  .attr('d', line);

      // agroup data for xAxis with line and display it
      const xAxisGroup = dataGroup
        .append('g')
        .attr('class', 'xAxisGroup')
      // sending line to down of the chart
        .attr('transform', 'translate(0, ' + height + ')');

      const xAxis = d3.axisBottom(xAx)
        .tickFormat(d3.timeFormat('%Y-%m-%d'));

      xAxis(xAxisGroup);

      // agroup data for yAxis with line and display it
      const yAxisGroup = dataGroup
        .append('g')
        .attr('class', 'yAxisGroup');

      const yAxis = d3.axisLeft(yAx);
      yAxis(yAxisGroup);

  }

  drawCirclesRect() {
    let data = [0, 2, 8, 1, 2 ];
     let initialX = 15;
     let deltaX = 25;
     let initialY = 15;
     let deltaY = 25;
    let currentX = initialX;
     let currentY = initialY;
    let svg = d3.select('#card1')
                 .append('svg')
                 // make zoom
                 // .attr('transform', 'scale(2)')
                 .attr('margin-top', '20px')
                 ;
    let gCircles = svg.append('g');
     gCircles.attr('class', 'circleGroup');
    data.forEach( val => drawCircle(gCircles, val));
    // drawCircle(gCircles, 2);
     // drawCircle(gCircles , 8);
     // drawCircle(gCircles, 1);
     // drawCircle(gCircles , 2);
    currentX = initialX;
     currentY += deltaY;
    let gRect = svg.append('g');
     gRect.attr('class', 'rectangleGroup');
    data.forEach( val => drawRectangule(gRect, val));
     // drawRectangule(gRect, 2);
     // drawRectangule(gRect, 8);
     // drawRectangule(gRect, 1);
     // drawRectangule(gRect, 2);
    function drawRectangule(gRect , radious) {
       gRect
         .append('rect')
         .attr('fill', 'red')
         .attr('width', 5)
         .attr('height', radious)
         .attr('x', currentX)
         .attr('y', currentY)
         ;
       gRect
         .append('text')
         .text(radious)
         .attr('fill', 'black')
         .attr('x', currentX)
         .attr('y', currentY)
         .attr('font-size', '20px')
         ;
       currentX += deltaX;
     }

   function drawCircle(gCircles, radious: number) {
     gCircles
       .append('circle')
       .attr('fill', 'red')
       // conserve proportion on spaces for the figure
       .attr('r', Math.sqrt(radious))
       .attr('cx', currentX)
       .attr('cy', currentY)
       ;
     gCircles
       .append('text')
       .text(radious)
       .attr('fill', 'black')
       .attr('x', currentX)
       .attr('y', currentY)
       .attr('font-size', '3pt')
       ;
     currentX += deltaX;
   } 
  }

}
