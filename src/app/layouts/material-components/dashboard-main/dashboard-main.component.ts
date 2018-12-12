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
  pagesBasic: number;
  pagesDetail: number;
  constructor(public _machineService: MachineService) { }

  ngOnInit(): void {
    this.machineBasicInfo = this.loadBasicInfo();
    // console.log(this.machineBasicInfo);
    this.machineDetails = this.loadDetailInfo();
    // console.log(this.machineDetails);
  }

  public loadBasicInfo() {
    // apply SORT for IP's in Ipv4 Formats
    let machineBasicI: any[] = [];
      machineBasicI = this._machineService.getBasicInfo().sort( (prev, current) => {
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
    // console.log(`antes del return loadBasic`);
    // console.log(machineBasicInfo);
    this.pagesBasic = machineBasicI.length;
    return machineBasicI;
  }

  public loadDetailInfo() {
    let machineDetailsIp: any[] = [];
    machineDetailsIp = this._machineService.frecuencyByIp().sort( (prev, current) => {
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
    // console.log(`antes del return LoadDetail`);
    // console.log(machineDetails);
    this.pagesDetail = machineDetailsIp.length;
    return machineDetailsIp;
  }
}