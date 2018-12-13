import { Component, OnInit, AfterContentInit } from '@angular/core';

import * as d3 from 'd3';
@Component({
  selector: 'app-graphics-content',
  templateUrl: './graphics-content.component.html',
  styleUrls: ['./graphics-content.component.css']
})
export class GraphicsContentComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

    // using d3.js
  ngAfterContentInit() {
    let data = [0, 2, 8, 1, 2 ];
    let initialX = 15;
    let deltaX = 25;
    let initialY = 15;
    let deltaY = 25;

    let currentX = initialX;
    let currentY = initialY;

    let svg = d3.select('.card')
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
