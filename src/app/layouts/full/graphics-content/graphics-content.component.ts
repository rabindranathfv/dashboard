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
    d3.select('p').style('color', 'red');
  }

}
