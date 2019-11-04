import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AddEmployeeComponent } from './dialog/add-employee/add-employee.component';
import { RefreshService } from '../../services/refresh.service';
import { EmployeesService } from './services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'fatherName', 'TIN',"job","education",
  "gender","salary","country"];
  dataSource;


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  animal:any;

  constructor(private refresh:RefreshService,private dialog: MatDialog,private service:EmployeesService) { }

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
  getEmployee(){
    this.service.getEmployeedata().subscribe((result)=>{
    this.dataSource =  new MatTableDataSource(result);
    this.dataSource.paginator = this.paginator; 
    })
  }

}
