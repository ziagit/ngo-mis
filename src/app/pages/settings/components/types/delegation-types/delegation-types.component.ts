import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DelegationService } from './services/delegation.service';
import {MatPaginator} from '@angular/material/paginator';
import { RefDelTypeService } from './refreshDelegationType/ref-del-type.service';
import { DelTypeDialogComponent } from './delegationTypeDialog/del-type-dialog/del-type-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditDelTypeDiologComponent } from './delegationTypeDialog/edit-del-type-diolog/edit-del-type-diolog.component';



@Component({
  selector: 'app-delegation-types',
  templateUrl: './delegation-types.component.html',
  styleUrls: ['./delegation-types.component.scss']
})
export class DelegationTypesComponent implements OnInit {
  [x: string]: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'delegationType', 'delete'];
  dataSource;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private dialog: MatDialog,private delegaionService:DelegationService, private refresh: RefDelTypeService) {
      this.refresh.getRefresh().subscribe((res)=>{
        this.getDelegaionType();
      })
        
      
   }

  ngOnInit() {
   this.getDelegaionType();
   }

  getDelegaionType()
  {
    this.delegaionService.getDelegation().subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteDlgType(id)
  {
    this.delegaionService.deleteDlgType(id).subscribe(res=>{
      alert('are you sure you want to delte it!!');
      console.log('successfully deleted',res);
      this.getDelegaionType();
      

    })
  }

  openDialog(){
    const dialogRef = this.dialog.open(DelTypeDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  editDlgType(data){
    const dialogRef = this.dialog.open(EditDelTypeDiologComponent, {
      width: '400px',
      data:data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  
  

}
