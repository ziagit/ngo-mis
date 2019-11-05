import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { OrganizationService } from './service/organizationType.service';
import { MatDialog } from '@angular/material/dialog';
import { AddOrganizationTypeComponent } from './dialogType/add-organization-type/add-organization-type.component';
import { RefreshTypeService } from '../services/refresh-type.service';
import { EditOrgTypeDiologComponent } from './dialogType/edit-org-type-diolog/edit-org-type-diolog.component';




@Component({
  selector: 'app-organization-types',
  templateUrl: './organization-types.component.html',
  styleUrls: ['./organization-types.component.scss']
})
export class OrganizationTypesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'orgType', 'delete'];
  dataSource;
  animal: any;

  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private dialog: MatDialog,private orgTypeService:OrganizationService, private refresh: RefreshTypeService) 
  {
    this.refresh.getRefresh().subscribe((refresh)=>{
      this.getOrgType();
    });

    
   }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getOrgType();

  
  }

  getOrgType()
  {
     this.orgTypeService.getOrganization().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  // delte method
  deleteorgtype(id)
  {
    this.orgTypeService.deleteOrgType(id).subscribe(res=>{
    this.getOrgType();
    console.log('successfully deleted!', res);
    });
  }
  
  // dialog functions
  openDialog(): void {
    const dialogRef = this.dialog.open(AddOrganizationTypeComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  editOrganizationType(data): void {
    const dialogRef = this.dialog.open(EditOrgTypeDiologComponent, {
      width: '400px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
