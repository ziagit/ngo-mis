import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { BudjetTypeService } from './services/budjet-type.service';
import {MatPaginator} from '@angular/material/paginator';
import { BTypeDialogComponent } from './budjetTypeDialog/b-type-dialog/b-type-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { RefreshBudjetTypeService } from './budjetTypeReresh/refresh-budjet-type.service';
import { EditBudjetTypeComponent } from './budjetTypeDialog/edit-budjet-type/edit-budjet-type.component';



@Component({
  selector: 'app-budjet-types',
  templateUrl: './budjet-types.component.html',
  styleUrls: ['./budjet-types.component.scss']
})
export class BudjetTypesComponent implements OnInit {
  [x: string]: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'type', 'delete'];
  dataSource ;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private dialog: MatDialog, private budjetTypeService: BudjetTypeService, private refresh:RefreshBudjetTypeService) {
    this.refresh.getRefresh().subscribe((result)=>{
      this.getBudjetType();
    });

   }

   ngOnInit() {
    this.getBudjetType();
    
  }
   getBudjetType()
   {
    this.budjetTypeService.getBudjetType().subscribe((data)=>{
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
   }

   deleteBudjetType(id){
     this.budjetTypeService.deleteBudjetType(id).subscribe(res=>{
       this.getBudjetType();
       alert('are you sure you want to delete it!!');
       console.log('successfully deleted', res);
     })
   }

    // dialog functions
  openDialogBudjet(): void {
    const dialogRef = this.dialog.open(BTypeDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

     // dialog functions for edit--------------------------->
     editDialog(editData) {
      const dialogRef = this.dialog.open(EditBudjetTypeComponent, {
        width: '400px',
        data: editData,
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }
 
}
