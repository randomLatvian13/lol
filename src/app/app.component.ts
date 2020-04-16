import { Component, ChangeDetectionStrategy } from '@angular/core';
import { log } from 'src/helpers';

export enum TabType {
  NewCalculation = 'New calculation',
  CalculationDetails = 'Calculation details'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'tabs';

  TabTypes = TabType;

  tabsState = {
    tabs: [
      {
        tabType: TabType.CalculationDetails,
        label: TabType.CalculationDetails,
        id: Date.now().valueOf()
      }
      
    ],
    selectedIndex: 0
  }

  trackByFn(index, item) {
    return item.id; // or item.id
  }

  addNewCalculation() {
    this.addTab(TabType.NewCalculation);
  }

  private addTab(tabType: TabType) {
    const newTab = {tabType, label: TabType.NewCalculation, id: Date.now().valueOf()}
    // todo, move reducing logics away to reducer

    this.tabsState = {
      ...this.tabsState,
      tabs: [
        ...this.tabsState.tabs,
        newTab
      ]
    }
    console.log('tab added', newTab);
    console.log('new State', this.tabsState);
    this.onChangeTab(this.tabsState.tabs.length);
  }

  onChangeTab (idx) {
    log('Change tab', idx);
    this.tabsState.selectedIndex = idx;
  }
}
