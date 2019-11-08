import { AboutEditComponent } from './component/about-edit/about-edit.component';
import { DataService } from './../../../settings/components/services/data.service';
import { AboutUsService } from './about-us.service';
import { AboutAddComponent } from './component/about-add/about-add.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  orgForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private aboutusService:AboutUsService) {
  }
  ngOnInit() {
    this.getAboutUs()
  }

  displayedColumns: string[] = ['id', 'titleDa', 'titleEn', 'titlePa', 'descriptionDa', 'descriptionEn', 'descriptionPa','actions'];
  dataSource;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addAbout(){
        const dialogRef = this.dialog.open(AboutAddComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getAboutUs(){
    return this.aboutusService.getAbouts().subscribe(res=>{
     // console.log("my dddddddddddata: ", res)
      this.dataSource = new MatTableDataSource(res);
    })
  }

  deleteAB(id){
    console.log("my id",id);
    return this.aboutusService.deleteAbout(id).subscribe(res=>{
      this.getAboutUs();
      console.log('good', res);
      

    })

  }
  editAB(data){
        const dialogRef = this.dialog.open(AboutEditComponent, {
      width: '600px',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}
