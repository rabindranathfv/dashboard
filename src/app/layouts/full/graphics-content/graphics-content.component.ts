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
    // data test 0 2 8 1 2
    let currentX = 100;
    let currentY = 55;

    let svg = d3.select('.card')
                .append('svg')
                // make zoom
                .attr('transform', 'scale(1)')
                .attr('margin-top', '20px')
                ;
    drawCircle(2);
    drawCircle(8);
    drawCircle(1);
    drawCircle(2);

    currentX = 455;
    currentY += 20;

    drawRectangule(2);
    drawRectangule(8);
    drawRectangule(1);
    drawRectangule(2);

    function drawRectangule(radious) {
      svg
        .append('rectangule')
        .attr('fill', 'red')
        .attr('width', 5)
        .attr('height', radious)
        .attr('x', currentX)
        .attr('y', currentY)
        ;
      svg
        .append('text')
        .text(radious)
        .attr('fill', 'black')
        .attr('x', currentX)
        .attr('y', currentY)
        .attr('font-size', '20px')
        ;
      currentX += 25;
    }

    function drawCircle(radious: number) {
      svg
        .append('circle')
        .attr('fill', 'red')
        .attr('r', radious * 10)
        .attr('cx', currentX)
        .attr('cy', currentY)
        ;
      svg
        .append('text')
        .text(radious)
        .attr('fill', 'black')
        .attr('x', currentX)
        .attr('y', currentY)
        .attr('font-size', '3pt')
        ;
      currentX += 25;
    }
  }

}
