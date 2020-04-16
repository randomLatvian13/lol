import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { CalculationsComponent } from './components/calculations/calculations.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CalculationsComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
