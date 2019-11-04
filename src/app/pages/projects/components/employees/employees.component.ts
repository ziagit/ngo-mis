import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddEmployeeComponent } from './dialog/add-employee/add-employee.component';
import { RefreshService } from '../../services/refresh.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  animal:any;
  constructor(private refresh:RefreshService,private dialog: MatDialog) { }

  ngOnInit() {
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
