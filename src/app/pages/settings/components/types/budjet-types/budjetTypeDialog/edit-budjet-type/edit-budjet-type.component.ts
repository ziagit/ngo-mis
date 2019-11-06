import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BudjetTypeService } from '../../services/budjet-type.service';
import { RefreshBudjetTypeService } from '../../budjetTypeReresh/refresh-budjet-type.service';

@Component({
  selector: 'app-edit-budjet-type',
  templateUrl: './edit-budjet-type.component.html',
  styleUrls: ['./edit-budjet-type.component.scss']
})
export class EditBudjetTypeComponent implements OnInit {
  [x: string]: any;
  orgForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private dialog: MatDialog, private editServices:BudjetTypeService, private refresh:RefreshBudjetTypeService) { 
    this.createForm();
    this.orgForm
  
  }

  ngOnInit() {
  }

  createForm()
  {
    this.orgForm = this.formBuilder.group({
     type: [this.data.type, Validators.required],
  })
}

  closeDiolog()
  {
    this.dialog.closeAll();
  }





}
