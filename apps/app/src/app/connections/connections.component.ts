import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConnectionsService } from './connections.service';

@Component({
  selector: 'example-transport-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {

  start = new FormControl('');
  end = new FormControl('');

  displayResult = false;
  displayDeparture = "";
  displayArrival = "";

  connections: any[] = []

  constructor(private conService: ConnectionsService) { }

  ngOnInit() {
  }

  connectionSubmit() {

    this.conService.getConnection(this.start.value, this.end.value)
      .subscribe((res) => {


        this.displayResult = true;


        console.log(res.connections)
        this.connections = res.connections;

        console.log(res.from);
        console.log(res.to)

        this.displayDeparture = res.from.name;
        this.displayArrival = res.to.name;

      })

  }
}
