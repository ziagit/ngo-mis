import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { KeypersonsServiceService } from '../../keypersonsService/keypersons.service';



@Component({
  selector: 'app-edit-keyspersonal-orgs',
  templateUrl: './edit-keyspersonal-orgs.component.html',
  styleUrls: ['./edit-keyspersonal-orgs.component.scss']
})
export class EditKeyspersonalOrgsComponent implements OnInit {

  organization_id:any;
  orgForm: FormGroup;
   

  constructor(private FormBuilder: FormBuilder ,@Inject(MAT_DIALOG_DATA) public data:any,private dialog: MatDialog,
  private keyPServices:KeypersonsServiceService) 
  { 
    this.createForm();
    console.log(this.data);

  }

  ngOnInit() {
  }

  createForm() 
  {
    this.orgForm = this.FormBuilder.group
    ({
        name: [this.data.name, Validators.required],
        fatherName: [this.data.fatherName, Validators.required],
        possition: [this.data.possition, Validators.required],
        phone: [this.data.phone, Validators.required],
        email: [this.data.email, Validators.required],
        NIC: [this.data.NIC, Validators.required],
        gender: [this.data.gender, Validators.required],
        education: [this.data.education, Validators.required],
        address: [this.data.address, Validators.required],
        organization_id: [this.data.organization_id, Validators.required],       
    });

  }

  updatekeyspOrgs(data) 
  {
    this.keyPServices.updateKeysPersonalOrgs(data.value,this.data.id).subscribe((res)=>
    {
            // console.log(res,"data for updatething");
            this.dialog.closeAll();
            
    });
  }

  


}
