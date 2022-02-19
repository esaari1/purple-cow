declare var require: any;

import { Component } from '@angular/core';

const countapi = require('countapi-js');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'purple-cow-app';

  ngOnInit() {

  }
}
