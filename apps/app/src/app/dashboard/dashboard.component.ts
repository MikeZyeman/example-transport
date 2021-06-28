import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'example-transport-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  isHandset = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {

      return matches;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
