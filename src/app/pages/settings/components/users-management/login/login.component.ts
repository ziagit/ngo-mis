import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  orgForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private routes: Routes) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.orgForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
    });
  }
  login(data){
    console.log("Data: ", data.value);
  }
  register(){
    console.log("Register")
  }

}
