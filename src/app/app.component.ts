import { Component } from '@angular/core';
import { GlobalStatusService } from './global-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private globalStatus: GlobalStatusService) {
    this.globalStatus.getTest().subscribe(console.warn);
    this.globalStatus.patchGeneralStatus({
      apiPrefix: 'string_asdfasdfasdfadf',
      apiFolder: 'string_asdfasdfasdfadf',
      subApiFolder: [
        {
          selected: false,
          folderName: 'string_asdfasdfasdfadf',
        },
        {
          selected: true,
          folderName: '123',
        },
        {
          selected: true,
          folderName: '456',
        },
        {
          selected: false,
          folderName: '789',
        },
      ],
    });
  }
}
