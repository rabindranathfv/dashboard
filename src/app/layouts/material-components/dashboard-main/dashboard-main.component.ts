import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

// services
import { MachineService } from '../../../services/machine.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css'],
})
export class DashboardMainComponent implements OnInit {

  // <i class="material-icons"> date_range </i>
  // <i class="material-icons">av_timer </i>
  // <i class="material-icons">devices_other </i>
  // <i class="material-icons"> repeat </i>
  machineBasicInfo: any[] = [];
  machineDetails: any[] = [];
  constructor(private _machineService: MachineService) {
    this.loadBasicInfo();
    this.loadDetailInfo();
  }

  loadBasicInfo() {
    // apply SORT for IP's in Ipv4 Formats
    this.machineBasicInfo = this._machineService.getBasicInfo().sort( (prev, current) => {
      prev = prev['ip'].split('.');
      current = current['ip'].split('.');
      for (let i = 0; i < prev.length; i++) {
        prev[i] = parseInt( prev[i], 10);
        current[i] = parseInt( current[i], 10);
        if ( prev[i] < current[i] ) {
            return -1;
        } else if ( prev[i] > current[i] ) {
            return 1;
        }
      }
      return 0;
    });
    // console.log(`data basica`);
    // console.log(this.machineBasicInfo);
  }

  loadDetailInfo() {
    this.machineDetails = this._machineService.frecuencyByIp().sort( (prev, current) => {
      prev = prev['ip'].split('.');
      current = current['ip'].split('.');
      for (let i = 0; i < prev.length; i++) {
        prev[i] = parseInt( prev[i], 10);
        current[i] = parseInt( current[i], 10);
        if ( prev[i] < current[i] ) {
            return -1;
        } else if ( prev[i] > current[i] ) {
            return 1;
        }
      }
      return 0;
    });
    // console.log(`data especifica`);
    // console.log(this.machineDetails);
  }
  ngOnInit() { }
}