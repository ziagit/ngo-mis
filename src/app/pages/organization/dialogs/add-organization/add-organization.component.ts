import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit {
  orgForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.orgForm = this.formBuilder.group({
        name: ['', Validators.required],
        details: ['', Validators.required],
        gender: ['', Validators.required],
    });
  }
  callingFunction(data){
    console.log("Data: ", data.value);
  }
}
