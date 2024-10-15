import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',سلکتور به شکل اتربیوت
  // selector: '.app-servers', سلکتور به صورت کلاس
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrl: './servers.component.scss',
})
export class ServersComponent {
  allowedNewServer: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowedNewServer = true;
    }, 2000);
  }
}
