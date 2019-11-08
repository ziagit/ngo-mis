import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { KeypersonsServiceService } from '../../keypersonsService/keypersons.service';

@Component({
  selector: 'app-add-keypersons',
  templateUrl: './add-keypersons.component.html',
  styleUrls: ['./add-keypersons.component.scss']
})
export class AddKeypersonsComponent implements OnInit {
  organization_id:any;
  orgForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private keypersonalService:KeypersonsServiceService
    ,@Inject(MAT_DIALOG_DATA) public data:any,private dialog: MatDialog) { 
    this.createForm();
    this.keypersonalService.selectOrganizations().subscribe((res) =>{
      // console.log(res);
      this.organization_id = res;
    });
  }

  ngOnInit() {
  }

  createForm() 
  {
    this.orgForm = this.formBuilder.group
    ({
        name: ['', Validators.required],
        fatherName: ['', Validators.required],
        possition: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        NIC: ['', Validators.required],
        gender: ['', Validators.required],
        education: ['', Validators.required],
        address: ['', Validators.required],
        organization_id: ['', Validators.required],       
    });

  }
  
  onSubmitKeyPersonalsForm(data)
  {
    // console.log(data.value);
    this.keypersonalService.addKeysPersonal(data.value).subscribe((res)=> {
        // console.log(data,"data is Saving");
        this.dialog.closeAll();
    });
      
  }

}
