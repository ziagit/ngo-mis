import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { PublicInfoService } from '../../PublicInfoServices/public-info.service';

@Component({
  selector: 'app-editpublic-info',
  templateUrl: './editpublic-info.component.html',
  styleUrls: ['./editpublic-info.component.scss']
})
export class EditpublicInfoComponent implements OnInit {
  orgForm: FormGroup;
  organizationtype_id:any;
  donner_id:any;
  constructor(private FormBuilder: FormBuilder ,@Inject(MAT_DIALOG_DATA) public data:any,private dialog: MatDialog, private publicInfo:PublicInfoService)
   {
     this.createForm();
    //  console.log(this.data);
    this.publicInfo.selectOrgs().subscribe((result)=>
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
    this.orgForm = this.FormBuilder.group({
        nameDa: [this.data.nameDa, Validators.required],
        nameEn: [this.data.nameEn, Validators.required],
        abrivation: [this.data.abrivation, Validators.required],
        registerNo: [this.data.registerNo, Validators.required],
        registerDate: [this.data.registerDate, Validators.required],
        contactNo: [this.data.contactNo, Validators.required],
        email: [this.data.email, Validators.required],
        goals: [this.data.goals, Validators.required],
        currentCashAmount: [this.data.currentCashAmount, Validators.required],
        currency: [this.data.currency, Validators.required],
        organizationtype_id:[this.data.organizationtype_id, Validators.required],
      
        
    });
  }

  update(data){
    this.publicInfo.update(data.value,this.data.id).subscribe((res)=> 
    {
        console.log(res,"Data is Comming from update");
        this.dialog.closeAll();
    });
  }



  

}
