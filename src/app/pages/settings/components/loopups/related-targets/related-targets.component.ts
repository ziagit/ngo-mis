import { Component, OnInit, ViewChild } from '@angular/core';
import { RelatedTargetSerivceService } from './service/related-target-serivce.service';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { AddRelatedTargetComponent } from './dialoags/add-related-target/add-related-target.component';
import { EditRelatedTargetComponent } from './dialoags/edit-related-target/edit-related-target.component';
import { RefreshService } from '../refreshService/refresh.service';

@Component({
  selector: 'app-related-targets',
  templateUrl: './related-targets.component.html',
  styleUrls: ['./related-targets.component.scss']
})
export class RelatedTargetsComponent implements OnInit {


  displayedColumns: string[] = ['id', 'relatedTargetdesc','relatedGoals_id','edit','delete'];
  dataSource;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private refresh:RefreshService,private service:RelatedTargetSerivceService,private dialog:MatDialog) 
  { 
    this.selectData();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.refresh.getRefresh().subscribe(res=>{
      this.selectData();
    })
    
  }

  //select function
  selectData(){
    this.service.getRelatedTargetData().subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

//delete function
  deleteRelatedTarget(id){
    this.service.deleteRelatedTarget(id).subscribe(res=>{
      this.selectData();
    })
  }

  //insert dialog
  openDialog(): void {
    const dialogRef = this.dialog.open(AddRelatedTargetComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //edit dailog
  editDialog(data): void {
    const dialogRef = this.dialog.open(EditRelatedTargetComponent, {
      width: '400px',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
