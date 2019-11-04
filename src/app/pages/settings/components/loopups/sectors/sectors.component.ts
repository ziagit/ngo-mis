import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { SectoreService } from './service/sectore.service';
import { AddSectoreComponent } from './dialogs/add-sectore/add-sectore.component';
import { MatDialog } from '@angular/material';
import { EditSectoreComponent } from './dialogs/edit-sectore/edit-sectore.component';
import { RefreshService } from '../refreshService/refresh.service';


@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent implements OnInit {
 
  displayedColumns: string[] = ['id', 'sectorName', 'proirity','edit','delete'];
  dataSource;
  animal:any;
  constructor(private dialog: MatDialog,private refresh:RefreshService,private service:SectoreService) 
  { 
    this.selectSector();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.refresh.getRefresh().subscribe(res=>{
      this.selectSector();
    })
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //select function
  selectSector(){
    this.service.getSectore().subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }


  //delete function
  deleteSectoreData(id){
    this.service.deleteSectore(id).subscribe(res=>{
      this.selectSector();
    })
  }


  //inser dailog
  openDialog(): void {
    const dialogRef = this.dialog.open(AddSectoreComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


// edit dialog
  editData(data): void {
    const dialogRef = this.dialog.open(EditSectoreComponent, {
      width: '400px',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
