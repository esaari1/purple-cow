import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-update',
  templateUrl: './counter-update.component.html',
  styleUrls: ['./counter-update.component.css']
})
export class CounterUpdateComponent implements OnInit {

  @Output() onButtonClick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked() {
    this.onButtonClick.emit('');
  }
}
