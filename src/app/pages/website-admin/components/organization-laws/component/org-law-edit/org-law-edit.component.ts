import { FormBuilder, Validator, FormGroup } from '@angular/forms';
import { AboutUsComponent } from './../../../about-us/about-us.component';
import { AboutUsService } from './../../../about-us/about-us.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-law-edit',
  templateUrl: './org-law-edit.component.html',
  styleUrls: ['./org-law-edit.component.scss']
})
export class OrgLawEditComponent implements OnInit {

  constructor(private AboutUsService:AboutUsComponent, private fb:FormBuilder) { }

  ngOnInit() {
  }


}
