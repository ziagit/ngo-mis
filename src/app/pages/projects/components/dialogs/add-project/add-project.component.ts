import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

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
