import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DistrictService } from '../services/district.service';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AddDistrictComponent } from './dialogs/add-district/add-district.component';
import { EditDistrictComponent } from './dialogs/edit-district/edit-district.component';
import { RefreshService } from '../refreshService/refresh.service';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.scss']
})
export class DistrictsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'districtName', 'districtCode', 'drovince_id','edit','delete'];
  dataSource;
  animal: any;
  constructor(public dialog: MatDialog, private refresh:RefreshService,private dataService: DistrictService) 
  {
    this.selectDistrict();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.refresh.getRefresh().subscribe(res=>{
      this.selectDistrict();
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDistrictComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  editDialog(data): void {
    const dialogRef = this.dialog.open(EditDistrictComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  selectDistrict(){
    this.dataService.getDistrict().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;

    })
  }
  
  deleteDistrictData(id){
    this.dataService.deleteDistrict(id).subscribe(res=>{
      console.log('Distritc delated',res);
      this.selectDistrict();
    })
  }



}
