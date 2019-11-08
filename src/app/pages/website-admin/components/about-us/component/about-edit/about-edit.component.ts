import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IndexComponent } from './../../../../../index/index.component';
import { AboutUsService } from './../../about-us.service';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.scss']
})
export class AboutEditComponent implements OnInit {

aboutEditForm:FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) private data:any,private aboutService:AboutUsService,private fb:FormBuilder) { }

  ngOnInit() {
    this.creatForm();
  }

  
  creatForm(){
  this.aboutEditForm = this.fb.group({
    titleDa: [this.data.titleDa, Validators.required],
    titleEn: [this.data.titleEn, Validators.required],
    titlePa: [this.data.titlePa, Validators.required],
    descriptionDa: [this.data.descriptionDa, Validators.required],
    descriptionEn: [this.data.descriptionEn, Validators.required],
    descriptionPa: [this.data.descriptionPa, Validators.required]
  });
}
editAB(e){
  e.preventDefault();
  
  this.aboutService.editAbout(e.data, e.id).subscribe(res=>{
    console.log("updated ",res)
  });
}

}
