import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {


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
}
