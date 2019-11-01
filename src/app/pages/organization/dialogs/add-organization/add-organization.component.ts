import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OrganizationService } from '../../Services/organization.service';


@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit {
  orgForm: FormGroup;
  orgTypes;
  constructor(private formBuilder: FormBuilder, private os:OrganizationService) {
    this.createForm();
   }

ngOnInit() {
  this.os.getOrgTypes().subscribe(response=>{
    this.orgTypes = response;
  })
}

  createForm() {
    this.orgForm = this.formBuilder.group({
        orgNameDari: ['', Validators.required],
        orgNameEng: ['', Validators.required],
        orgAbrivation: ['', Validators.required],
        regNo: ['', Validators.required],
        regDate: ['', Validators.required],
        orgAddress: ['', Validators.required],
        sector_id: ['', Validators.required],
        orgs_types_id: ['', Validators.required],
        goles: ['', Validators.required],
        house: ['', Validators.required],
        details: ['', Validators.required],
        gender: ['', Validators.required],
    });
  }
  Add(){
    this.os.AddOrganization(this.orgForm).subscribe((response) =>{
        console.log("Data: ",response);
    });
    // console.log("Data: ",data);
  }

}
