import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeTypeService } from './services/employee-type.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DiologEmpTypeComponent } from './empTypeDialog/diolog-emp-type/diolog-emp-type.component';
import { RefreshEmpTypeService } from './empTypeRefresh/refresh-emp-type.service';
import { EditEmpTypeComponent } from './empTypeDialog/edit-emp-type/edit-emp-type.component';



@Component({
  selector: 'app-employee-types',
  templateUrl: './employee-types.component.html',
  styleUrls: ['./employee-types.component.scss']
})
export class EmployeeTypesComponent implements OnInit {
  [x: string]: any;

  // datatable important---------------------------------->
  displayedColumns: string[] = ['id', 'type', 'delete'];
  dataSource ;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // ----------------------------------------------------->

  constructor(private dialog: MatDialog,private employeeTypeService: EmployeeTypeService, private refresh:RefreshEmpTypeService) {
    this.refresh.getRefresh().subscribe((result)=>{
      this.getEmpType();
    })

   }

  ngOnInit() {
    this.getEmpType();
  }
  getEmpType(){
    this.employeeTypeService.getEmployeeType().subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  deleteEmp(id){
    this.employeeTypeService.deleteEmp(id).subscribe(res=>{
      this.getEmpType();
      console.log("deteel: ", res);
    })
  }

  //dialog functions
  openDialog(){
    const dialogRef = this.dialog.open(DiologEmpTypeComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  editEmpType(data){
    const dialogRef = this.dialog.open(EditEmpTypeComponent, {
      width: '400px',
      data:data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
