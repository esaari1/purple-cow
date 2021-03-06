import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterUpdateComponent } from './counter-update/counter-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterUpdateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
