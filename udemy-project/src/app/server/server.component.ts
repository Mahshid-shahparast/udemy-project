import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerCopmponent {
  serverStatus: string = 'offline';
  serverId: number = 10;

  getServerStatus(): string {
    return this.serverStatus;
  }
}
