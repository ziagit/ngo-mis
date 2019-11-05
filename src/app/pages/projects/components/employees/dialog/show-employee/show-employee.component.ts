import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.scss']
})
export class ShowEmployeeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data:any) { 
    console.log(data.organization);
  }

  ngOnInit() {
  }

}
