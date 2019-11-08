import { OrgLawService } from './../../org-law.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-law-add',
  templateUrl: './org-law-add.component.html',
  styleUrls: ['./org-law-add.component.scss']
})
export class OrgLawAddComponent implements OnInit {
  orgForm:FormGroup;
  constructor(private orgService:OrgLawService,private fb:FormBuilder) { }

  ngOnInit() {
    this.creatForm();
  }
creatForm(){
  this.orgForm = this.fb.group({
    titleDa: ['', Validators.required],
    titleEn: ['', Validators.required],
    titlePa: ['', Validators.required],
    descriptionDa: ['', Validators.required],
    descriptionEn: ['', Validators.required],
    descriptionPa: ['', Validators.required],
    pdfLink:['', Validators.required],
  });
}
addOrgLaw(e){
  e.preventDefault();
  this.orgService.addOrgLaw(e.value).subscribe(res=>{
    console.log("saved: ",res)
  });
}
}
