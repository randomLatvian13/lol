import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions, SelectionChangedEvent, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridAngular;

  gridOptions: GridOptions;

   /** DEBUG */
   selectedRowId: string = '-1';

  constructor() { }

  columnDefs = [
    { headerName: 'Make', field: 'make', checkboxSelection: true },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  ngOnInit(): void {
    console.log('Calculations:: on init');
    this.gridOptions = {
      onSelectionChanged: (event: SelectionChangedEvent) => {
        console.log('selection change', event);
        const selectedRowId = this.agGrid.api.getSelectedNodes()[0];
        this.selectedRowId = selectedRowId === undefined ? '-1' : selectedRowId.id;
      },
      onGridReady: (event: GridReadyEvent) => {
        event.api.sizeColumnsToFit();
      }
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('Calculations:: on destroy');
  }

}
