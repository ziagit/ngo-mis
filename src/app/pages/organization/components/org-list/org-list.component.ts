import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AddOrganizationComponent } from '../../dialogs/add-organization/add-organization.component';
import {MatPaginator} from '@angular/material/paginator';
import { OrgListService } from './org-list.service';
import { IOrganization } from './Organization';
import { Router } from '@angular/router';
import { StepperComponent } from '../stepper/stepper.component';



export interface PeriodicElement {
 
}

@Component({
  selector: 'app-org-list',
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.scss']
})
export class OrgListComponent implements OnInit {
      dataSource;
    displayedColumns: string[] = ['id','nameDa', 'nameEn', 'abrivation', 'registerNo','registerDate','contactNo','email',
  'organizationtype_id','donner_id','sector_id','goals','currentCashAmount','currency','house','street','district_id','province_id'];

  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  animal:any;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private dialog: MatDialog, private orgService: OrgListService, private router: Router){
    this.getOrg();
  }

  ngOnInit(){
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddOrganizationComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  getOrg(){
    this.orgService.getOrg().subscribe(res=>{
     this.dataSource =  new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 
    });
  }
  openStepper(){
    const dialogRef=this.dialog.open(StepperComponent,{
      width: '900px',
    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log("clodes dialog")
    })
  }

 

}
