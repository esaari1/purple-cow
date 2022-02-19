declare var require: any;

import { Component, OnInit } from '@angular/core';

const countapi = require('countapi-js');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'purple-cow-app';
  domain: string = 'ews';
  key = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';
  count: number = 0;

  ngOnInit() {
    countapi.get(this.domain, this.key).then((result) => {
      this.count = result.value;
    }, err => {
      console.log(err);
      alert('Unable to get current hit count');
    });

  }
}
