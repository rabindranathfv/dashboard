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
    d3.select('.col')
    .append('svg')
    .append('circle')
    .attr('fill', 'red')
    .attr('r', 100)
    .attr('cx', 150)
    .attr('cy', 150)
    ;
  }

}
