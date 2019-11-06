import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeTypeService } from '../../services/employee-type.service';
import { RefreshEmpTypeService } from '../../empTypeRefresh/refresh-emp-type.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-diolog-emp-type',
  templateUrl: './diolog-emp-type.component.html',
  styleUrls: ['./diolog-emp-type.component.scss']
})
export class DiologEmpTypeComponent implements OnInit {
  [x: string]: any;

  constructor(private formBuilder: FormBuilder, private empService:EmployeeTypeService, private refresh:RefreshEmpTypeService, private dialog:MatDialog) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.orgForm = this.formBuilder.group({
      employeeType: ['', Validators.required],
    });
  }

  insertEmpType(data){
    if(this.orgForm.valid){
     this.empService.addEmptype(data.value).subscribe((result)=>{
       this.refresh.setReresh('refresh');
       this.dialog.closeAll();
     });
  }
  }

}
