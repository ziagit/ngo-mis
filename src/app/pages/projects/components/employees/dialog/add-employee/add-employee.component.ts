import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { RefreshService } from '../../../../services/refresh.service';
import { EmployeesService } from '../../../../services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  province:any
  employeetype:any
  organization:any
  orgForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private emservice:EmployeesService, private dialog: MatDialog,private refresh:RefreshService) {
    this.createForm();
    this.emservice.getrealationtable().subscribe((result)=>{
      this.province = result[0];
      this.employeetype = result[1];
      this.organization = result[2];
    });
    
   }

  ngOnInit() {
  }
  createForm() {
    this.orgForm = this.formBuilder.group({
        name: ['', Validators.required],
        fatherName:[''],
        TIN:[''],
        job: ['', Validators.required],
        education: ['', Validators.required],
        specialty: ['', Validators.required],
        gender: ['', Validators.required],
        salary: ['', Validators.required],
        country: ['', Validators.required],
        province: ['', Validators.required],
        contractStartDate: ['', Validators.required],
        contractEndDate: ['', Validators.required],
        employeeType_id: ['', Validators.required],
        organization_id: ['', Validators.required],
        identity:[''],
        remark:[''],
        photo:['']
    });
  }
  addNewEmployee(data){
    if(this.orgForm.valid){
    
    }
  }

}
