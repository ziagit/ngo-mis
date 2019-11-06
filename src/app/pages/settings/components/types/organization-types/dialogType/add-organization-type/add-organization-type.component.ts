import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrganizationService } from '../../service/organizationType.service';
import { RefreshTypeService } from '../../../services/refresh-type.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-organization-type',
  templateUrl: './add-organization-type.component.html',
  styleUrls: ['./add-organization-type.component.scss']
})
export class AddOrganizationTypeComponent implements OnInit {
  [x: string]: any;
  
  orgForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private orgType:OrganizationService, private refresh: RefreshTypeService,private dialog :MatDialog) { 
    this.createForm();
  }
  ngOnInit() {
  }

  
  createForm() {
    this.orgForm = this.formBuilder.group({
        orgType: ['', Validators.required],
    });
  }
  
  addOrgType(data){
    if(this.orgForm.valid){
     this.orgType.addOrgtype(data.value).subscribe((result)=>{
      this.refresh.setRefresh("refresh");
      this.dialog.closeAll();
     });
  }
  }

}
