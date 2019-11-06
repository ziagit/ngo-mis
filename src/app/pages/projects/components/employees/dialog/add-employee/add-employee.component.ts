import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { RefreshService } from '../../../../services/refresh.service';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  condition:boolean=true;
  notcondition:boolean=false;
  province:any
  employeetypes:any
  organization:any
  
  orgForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private emservice:EmployeesService, private dialog: MatDialog,private refresh:RefreshService) {
    this.createForm();
    this.emservice.getrealationtable().subscribe((result)=>{
      this.province = result[0];
      this.employeetypes = result[1];
      this.organization = result[2];
    });
    
   }

  ngOnInit() {
  }
  createForm() {
    this.orgForm = this.formBuilder.group({
        name: ['', Validators.required],
        fatherName:['',[Validators.required]],
        TIN:['',[Validators.required]],
        job: ['', Validators.required],
        education: ['', Validators.required],
        specialty: ['', Validators.required],
        gender: ['', Validators.required],
        salary: ['', Validators.required],
        country: ['', Validators.required],
        province_id: ['', Validators.required],
        contractStartDate: ['', Validators.required],
        contractEndDate: ['', Validators.required],
        employeeType_id: ['', Validators.required],
        organization_id: ['', Validators.required],
        identity:['',[Validators.required]],
        remarks:[''],
        photo:['']
    });
  }
  addNewEmployee(data){
    if(this.orgForm.valid){
      this.emservice.addEmployeedata(data.value).subscribe((result)=>{
        this.refresh.setRefresh("refresh");
        this.dialog.closeAll();
      })
    }
    else{
      alert("لطفن هوشیارمندانه عمل کنید !!")
    }
    
  }
  employeeType(data){
    if(data=="0"){
      this.condition = false;
      this.notcondition = true;
    }
    else if(data=="1"){
      this.notcondition = false;
      this.condition=true;
    }
  }
  

}
