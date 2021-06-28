import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'example-transport-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  isHandset = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {

      return matches;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
