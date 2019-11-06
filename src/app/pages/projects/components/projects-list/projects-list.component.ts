import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddProjectComponent } from '../dialogs/add-project/add-project.component';
import {MatTableDataSource} from '@angular/material/table';

import {MatPaginator} from '@angular/material/paginator';
import { ProjectService } from '../../services/project.service';
import { RefreshService } from '../../services/refresh.service';
import { EditProjectComponent } from '../dialogs/edit-project/edit-project.component';
import { NG_PROJECT_AS_ATTR_NAME } from '@angular/core/src/render3/interfaces/projection';
import { DeleteProjectComponent } from '../dialogs/delete-project/delete-project.component';
import { MainContainerComponent } from '../main-container/main-container.component';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  
})
export class ProjectsListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'projectCode', 'projectName', 'projectPrice',"budjet_id","govDirectorate",
  "province_id","district_id","projectStartDate","projectEndDate",'projectStatus','sector_id','organization_id',"option"];
  dataSource;


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  animal:any;
  constructor(private dialog: MatDialog,private service:ProjectService,private refresh:RefreshService){
    this.getProjects();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(){
    this.refresh.getRefresh().subscribe((refresh)=>{
      this.getProjects();
    });
  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  getProjects(){
    this.service.getProjectdata().subscribe((data)=>{
    this.dataSource =  new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;    

  });  
  }
  deleteProject(data){
    const dialogRef = this.dialog.open(DeleteProjectComponent, {
      width: '400px',
      data:data
    });
  }
  editProject(data){

    const dialogRef = this.dialog.open(EditProjectComponent, {
      width: '800px',
      data: data

    });

    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openStepper(){

    const dialogRef = this.dialog.open(MainContainerComponent, {
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

}
