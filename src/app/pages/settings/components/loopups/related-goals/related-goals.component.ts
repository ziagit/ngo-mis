import { Component, OnInit, ViewChild } from '@angular/core';
import { RelatedGoalServiceService } from './service/related-goal-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { AddRelatedGoalComponent } from './dialogs/add-related-goal/add-related-goal.component';
import { EditRelatedGoalComponent } from './dialogs/edit-related-goal/edit-related-goal.component';
import { RefreshService } from '../refreshService/refresh.service';

@Component({
  selector: 'app-related-goals',
  templateUrl: './related-goals.component.html',
  styleUrls: ['./related-goals.component.scss']
})
export class RelatedGoalsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'relatedGoalsdes','edit','delete'];
  dataSource;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private refresh:RefreshService,private service:RelatedGoalServiceService,private dialog:MatDialog) 
  { 
    this.selectData();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.refresh.getRefresh().subscribe(res=>{
      this.selectData();
    })
    
  }

  selectData(){
    this.service.getRelatedGoal().subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  //delete function
  deleteRelatedGoal(id){
    this.service.deleteRelatedGoalData(id).subscribe(res=>{
      this.selectData();
      console.log('target dalated',res);
    })
  }

//insert dialog
  openDialog(): void {
    const dialogRef = this.dialog.open(AddRelatedGoalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  //edit dialog

  editDialog(data): void {
    const dialogRef = this.dialog.open(EditRelatedGoalComponent, {
      width: '400px',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  
}
