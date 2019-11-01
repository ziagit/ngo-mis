import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddProjectComponent } from '../dialogs/add-project/add-project.component';
import {MatTableDataSource} from '@angular/material/table';

import {MatPaginator} from '@angular/material/paginator';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../Project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  
})
export class ProjectsListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'projectCode', 'projectName', 'projectPrice',"budjet_id","govDirectorate",
  "province_id","district_id","projectStartDate","projectEndDate",'projectStatus','sector_id','organization_id'];
  dataSource;


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  animal:any;
  constructor(private dialog: MatDialog,private service:ProjectService){
    this.getProjects();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    
  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  getProjects(){
    this.service.getProjectdata().subscribe((data)=>{
    this.dataSource =  new MatTableDataSource(data);
  });
  }

}
