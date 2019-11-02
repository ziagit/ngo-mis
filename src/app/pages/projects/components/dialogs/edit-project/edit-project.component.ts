import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { RefreshService } from '../../../services/refresh.service';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  orgForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private dialog: MatDialog,private service:ProjectService,private refresh:RefreshService) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm() {
    this.orgForm = this.formBuilder.group({
        projectCode: ['', Validators.required],
        projectName: ['', Validators.required],
        projectPrice: ['', Validators.required],
        budjet_id: ['', Validators.required],
        govDirectorate: ['', Validators.required],
        province_id: ['', Validators.required],
        district_id: ['', Validators.required],
        projectStartDate: ['', Validators.required],
        projectEndDate: ['', Validators.required],
        projectStatus: ['', Validators.required],
        sector_id: ['', Validators.required],
        organization_id: ['', Validators.required],
    });
  }
  closeDialog(){
    this.dialog.closeAll();
  }
}
