import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrvyComponent } from './prvy/prvy.component';
import { DruhyComponent } from './druhy/druhy.component';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    AppComponent,
    PrvyComponent,
    DruhyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
