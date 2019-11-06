import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StepperService } from './stepper.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  isOptional = true;
  panelOpenState = false;
  indeterminate = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private stepperService: StepperService) {
    //  console.log(this.stepperService.getOrganizationList());
    

  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      ngoNameDari: ['', Validators.required],
      ngoNameEnglish: ['', Validators.required],
      shortName: ['', Validators.required],
    });
     this.secondFormGroup = this._formBuilder.group({
       secondCtrl: ['', Validators.required]
     });
   this.thirdFormGroup = this._formBuilder.group({
       thirdCtrl: ['', Validators.required]
     });
     this.fourthFormGroup = this._formBuilder.group({
       fourthCtrl: ['', Validators.required]
     });
  }

  

}
