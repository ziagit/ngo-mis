import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { BudjetTypeService } from '../../services/budjet-type.service';
import { RefreshBudjetTypeService } from '../../budjetTypeReresh/refresh-budjet-type.service';
import { budjetType } from '../../budjetType';

@Component({
  selector: 'app-edit-budjet-type',
  templateUrl: './edit-budjet-type.component.html',
  styleUrls: ['./edit-budjet-type.component.scss']
})
export class EditBudjetTypeComponent implements OnInit {

  Budjetmodel = new budjetType();
  orgForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
          private formBuilder: FormBuilder,
          private dialog: MatDialog, 
          private editServices:BudjetTypeService, 
          private refresh:RefreshBudjetTypeService) { 
   
    
  
  }

  ngOnInit() {
    this.initForm();
  }
  initForm()
  {
    this.orgForm = this.formBuilder.group({
      type: [this.data.type, Validators.required]

    })

  }

  editBType()
  {

    this.editServices.editBudjetType(this.orgForm.value, this.data.id).subscribe(res=>{
      this.refresh.setRefresh('refresh');
      this.dialog.closeAll();
    })
  }

  

  




}
