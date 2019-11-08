import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog} from '@angular/material';
import { PublicInfoService } from '../../PublicInfoServices/public-info.service';
@Component({
  selector: 'app-add-public-info',
  templateUrl: './add-public-info.component.html',
  styleUrls: ['./add-public-info.component.scss']
})
export class AddPublicInfoComponent implements OnInit {
  orgForm: FormGroup;
  organizationtype_id:any;
  donner_id:any;
  
  constructor(private publicInfoServices:PublicInfoService,private formBuilder: FormBuilder, private dialog: MatDialog)
   {
    this.createForm();
    this.publicInfoServices.selectOrgs().subscribe((result)=>
    {
       //  console.log(result);
      this.organizationtype_id = result[0];
      this.donner_id = result[5];
    });
    }

  ngOnInit() {
  }

  createForm() 
  {
    this.orgForm = this.formBuilder.group({
        nameDa: ['', Validators.required],
        nameEn: ['', Validators.required],
        abrivation: ['', Validators.required],
        registerNo: ['', Validators.required],
        registerDate: ['', Validators.required],
        contactNo: ['', Validators.required],
        email: ['', Validators.required],
        goals: ['', Validators.required],
        currentCashAmount: ['', Validators.required],
        currency: ['', Validators.required],
        organizationtype_id:['', Validators.required],
      
        
    });
  }
  onSubmitPubliInfo(data) {
   
    this.publicInfoServices.createOrganization(data.value).subscribe((res) =>{
        console.log(data,"this is data Caming");
        this.dialog.closeAll();
    });
    
  }



}
