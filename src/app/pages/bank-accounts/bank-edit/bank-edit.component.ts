import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankAccountsService } from '../bank-accounts.service';

@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.scss']
})

export class BankEditComponent implements OnInit {
  organization_id:any;  
  project_id:any;
  accountForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private formBuilder: FormBuilder, private service:BankAccountsService) {
            
   }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.accountForm = this.formBuilder.group({
      organization_id: [this.data.organization_id, [Validators.required]],
      project_id: [this.data.project_id, [Validators.required]],
      keyspersonnel_id: [this.data.keyspersonnel_id, [Validators.required]],
      name: [this.data.name, [Validators.required]],
      location: [this.data.location, [Validators.required]],
      currency: [this.data.currency, [Validators.required]],

    });
  }
 
  
}
