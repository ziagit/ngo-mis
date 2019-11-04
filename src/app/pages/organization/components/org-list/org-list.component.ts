import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AddOrganizationComponent } from '../../dialogs/add-organization/add-organization.component';
import {MatPaginator} from '@angular/material/paginator';
import { OrgListService } from './org-list.service';
import { IOrganization } from './Organization';



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

  constructor(private dialog: MatDialog, private orgService: OrgListService){
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
       console.log('data', res);

     this.dataSource =  new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator; 

    });

  }

 

}
