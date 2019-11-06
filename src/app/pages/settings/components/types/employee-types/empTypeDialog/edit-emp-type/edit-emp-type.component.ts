import { Component, OnInit, Inject } from '@angular/core';
import { employeeType } from '../../employeeType';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { EmployeeTypeService } from '../../services/employee-type.service';
import { RefreshEmpTypeService } from '../../empTypeRefresh/refresh-emp-type.service';

@Component({
  selector: 'app-edit-emp-type',
  templateUrl: './edit-emp-type.component.html',
  styleUrls: ['./edit-emp-type.component.scss']
})
export class EditEmpTypeComponent implements OnInit {

  empModel = new employeeType();
  orgForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private formBuilder: FormBuilder,
  private dialog: MatDialog, 
  private editEmpType: EmployeeTypeService, 
  private refresh:RefreshEmpTypeService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.orgForm = this.formBuilder.group({
      employeeType: [this.data.employeeType, Validators.required]

    })

  }

  editEmployeeType(){
    this.editEmpType.updateEmpType(this.orgForm.value,this.data.id).subscribe(res=>{
      this.refresh.setReresh('refresh');
      this.dialog.closeAll();

    })

  }

}
