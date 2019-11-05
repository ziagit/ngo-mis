import { Component, OnInit, Inject } from '@angular/core';
import { equipment } from '../equipment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { EquipmentService } from '../services/equipment.service';
import { RefreshEquiptTypeService } from '../services/refresh-equipt-type.service';

@Component({
  selector: 'app-edit-equipt-type',
  templateUrl: './edit-equipt-type.component.html',
  styleUrls: ['./edit-equipt-type.component.scss']
})
export class EditEquiptTypeComponent implements OnInit {

  equiptTypeModel = new equipment();
  orgForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private formBuilder: FormBuilder,
  private dialog: MatDialog, 
  private editEqpType: EquipmentService, 
  private refresh:RefreshEquiptTypeService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.orgForm = this.formBuilder.group({
      equipType: [this.data.equipType, Validators.required]

    })

  }

  editEquiptType(){
    this.editEqpType.updateEquiptType(this.orgForm.value,this.data.id).subscribe(res=>{
      this.refresh.setReshresh('refresh');
      this.dialog.closeAll();

    })

  }


}
