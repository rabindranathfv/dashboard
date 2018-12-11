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
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
  // <i class="material-icons"> date_range </i>
  // <i class="material-icons">av_timer </i>
  // <i class="material-icons">devices_other </i>
  // <i class="material-icons"> repeat </i>
  machineBasicInfo: any[] = [];
  machineDetailsByIp: any[] = [];
  constructor(private breakpointObserver: BreakpointObserver,
              private _machineService: MachineService
  ) {
    this.machineBasicInfo = this._machineService.getBasicInfo();
    console.log(`data basica`);
    console.log(this._machineService.getBasicInfo());
    this.machineDetailsByIp = this._machineService.frecuencyByIp();
    console.log(`data especifica`);
    console.log(this.machineDetailsByIp);
  }

  ngOnInit() { }
}
