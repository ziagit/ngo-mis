import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Mahdi', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'ali', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'hussain', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'rahim', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'baran', weight: 10.811, symbol: 'B'},
];
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  isDari:true;
  constructor() { }

  ngOnInit() {
  }

}
