import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { log } from 'src/helpers';

export enum TabType {
  NewCalculation = 'New calculation',
  CalculationDetails = 'Calculation details'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tabs';

  tabTypes = TabType;

  tabsState = {
    tabs: [
      {
        tabType: TabType.CalculationDetails,
        label: TabType.CalculationDetails
      },
      {
        tabType: TabType.NewCalculation,
        label: TabType.NewCalculation
      }
      
    ],
    selectedIndex: 0
  }

  onChangeTab (idx) {
    log('Change tab', idx);
    this.tabsState.selectedIndex = idx;
  }
}
