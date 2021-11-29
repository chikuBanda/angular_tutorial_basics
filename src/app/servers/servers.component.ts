import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  // selector: 'app-servers', // normal selector
  // selector: '[app-servers]', // attribute selector
  selector: '.app-servers', // class selector
  /*template: `
    <app-server></app-server>
    <app-server></app-server>
  `,*/
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer: boolean = true;
  serverCreationStatus: string = 'no server created';
  serverName: string = 'hello';
  isServerCreated: boolean = false;
  servers = ['testserver', 'testserver2']

  constructor() {

    setTimeout(() => {
      this.allowServer = false;
    }, 2000);

  }

  ngOnInit(): void {
  }

  getAllowServer () {
    return this.allowServer;
  }

  onServerCreation () {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'A new server has been created. Server name is: ' + this.serverName;
    console.log(this.servers);
  }

  onServerNameInput(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
