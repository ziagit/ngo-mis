import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { EditpublicInfoComponent } from './dialogs/editpublic-info/editpublic-info.component';
import { AddPublicInfoComponent } from './dialogs/add-public-info/add-public-info.component';
import { PublicInfoService } from './PublicInfoServices/public-info.service';

@Component({
  selector: 'app-public-info',
  templateUrl: './public-info.component.html',
  styleUrls: ['./public-info.component.scss']
})
export class PublicInfoComponent implements OnInit {
  dataSource;

  
  animal:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayedColumns: string[] = ['id','nameDa', 'nameEn', 'abrivation', 'registerNo','registerDate','contactNo','email',
'organizationtype_id','currentCashAmount','currency','action'];

  constructor(private dialog:MatDialog, private publicInfoServices:PublicInfoService) {

    this.getpublicInfo();
   }

  ngOnInit() {
   
      this.getpublicInfo();
   
    
    // console.log(this.getpublicInfo);
  }
getpublicInfo() {
  
  this.publicInfoServices.getPublicInfoAsDB().subscribe( res=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator; 
  });
}

openDialog(): void 
{
  const dialogRef = this.dialog.open(AddPublicInfoComponent, {
    width: '600px',
  });

  dialogRef.afterClosed().subscribe(result => {

     console.log('The dialog was closed');
    this.animal = result;
    
  });



}


editpublicinfo(data): void {
  const dialogRefEditInfo = this.dialog.open(EditpublicInfoComponent, {
  width: '600px',
  data: data,
});

dialogRefEditInfo.afterClosed().subscribe(result =>
{
  this.getpublicInfo();
   console.log('The dialog was closed');
  this.animal = result; 
});
}


}
