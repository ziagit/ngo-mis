import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.scss']
})
export class BankEditComponent implements OnInit {
  accountForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private formBuilder: FormBuilder) {

    console.log("my data: ", data);
   }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.accountForm = this.formBuilder.group({
      organization_id: [this.data.value, [Validators.required]],
      project_id: [this.data.project_id, [Validators.required]],
      keyspersonnel_id: ['', Validators.required],
      name: [this.data.name, [Validators.required]],
      location: [this.data.location, [Validators.required]],
      currency: [this.data.currency, [Validators.required]],

    });
  }
  editAccount(){

  }
}
