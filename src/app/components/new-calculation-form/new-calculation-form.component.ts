import { Component, OnInit } from '@angular/core';
import { log } from 'src/helpers';

@Component({
  selector: 'app-new-calculation-form',
  templateUrl: './new-calculation-form.component.html',
  styleUrls: ['./new-calculation-form.component.scss']
})
export class NewCalculationFormComponent implements OnInit {

  scrollPosition = 20;

  constructor() { }

  ngOnInit(): void {
    log('New calculation:: on init');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    log('New calculations: on destroy');
  }

  changeScroll() {
    this.scrollPosition+= 100;
  }

}
