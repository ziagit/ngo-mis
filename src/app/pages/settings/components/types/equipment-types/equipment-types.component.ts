import { Component, OnInit, ViewChild } from '@angular/core';
import { equipment } from './equipment';
import { EquipmentService } from './services/equipment.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { AddEquiptTypeComponent } from './equiptTypeDialog/add-equipt-type/add-equipt-type.component';
import { MatDialog } from '@angular/material/dialog';
import { RefreshEquiptTypeService } from './services/refresh-equipt-type.service';
import { EditEquiptTypeComponent } from './edit-equipt-type/edit-equipt-type.component';


@Component({
  selector: 'app-equipment-types',
  templateUrl: './equipment-types.component.html',
  styleUrls: ['./equipment-types.component.scss']
})
export class EquipmentTypesComponent implements OnInit {
  // datatable--------------------------->
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'equipType','delete'];
  dataSource ;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private dialog: MatDialog, private equiService: EquipmentService, private refresh:RefreshEquiptTypeService) {
    this.refresh.getRefresh().subscribe((result)=>{
      this.getEquiptType();
    })
   }

  ngOnInit() {
    this.getEquiptType();
    
  }
  getEquiptType()
  {
    this.equiService.getEquipment().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteEquiptType(id){
    this.equiService.deleteEptType(id).subscribe(res=>{
      this.getEquiptType();
      console.log('successfully deleted'+ res);
    });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddEquiptTypeComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  editEquipType(data): void {
    const dialogRef = this.dialog.open(EditEquiptTypeComponent, {
      width: '400px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
  

}
