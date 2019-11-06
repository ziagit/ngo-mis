import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ProvinceService } from '../services/province.service';
import { MatDialog } from '@angular/material';
import { AddProvinceComponent } from './dialogs/add-province/add-province.component';
import { EditProvinceComponent } from './dialogs/edit-province/edit-province.component';
import { RefreshService } from '../refreshService/refresh.service';

@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.scss']
})
export class ProvincesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'provinceName', 'provinceCode','edit','delete'];
  dataSource;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  animal:any;
  constructor( private dialog: MatDialog,private dataService: ProvinceService,private refresh:RefreshService) 
  {
    this.selectProvince();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.refresh.getRefresh().subscribe(res=>{
      this.selectProvince();
    });
  }

  selectProvince(){
    this.dataService.getProvince().subscribe((data)=>{
      this.dataSource =  new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    });
  }
  

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProvinceComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  editDialog(data): void {
    const dialogRef = this.dialog.open(EditProvinceComponent, {
      width: '400px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }


  deleteProvinceData(id){
    this.dataService.deleteProvince(id).subscribe(res=>{
      this.selectProvince();
      console.log('province delated',res);
    })
  }

  
  
}
