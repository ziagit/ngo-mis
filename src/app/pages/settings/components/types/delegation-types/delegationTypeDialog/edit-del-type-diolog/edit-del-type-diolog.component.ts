import { Component, OnInit, Inject } from '@angular/core';
import { delegation } from '../../delegation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DelegationService } from '../../services/delegation.service';
import { RefDelTypeService } from '../../refreshDelegationType/ref-del-type.service';

@Component({
  selector: 'app-edit-del-type-diolog',
  templateUrl: './edit-del-type-diolog.component.html',
  styleUrls: ['./edit-del-type-diolog.component.scss']
})
export class EditDelTypeDiologComponent implements OnInit {

  delegationModel = new delegation();
  orgForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private formBuilder: FormBuilder,
  private dialog: MatDialog, 
  private editdeleationType: DelegationService, 
  private refresh:RefDelTypeService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.orgForm = this.formBuilder.group({
      delegationType: [this.data.delegationType, Validators.required]

    })

  }

  editDelegationType(){
    this.editdeleationType.updateDeleationType(this.orgForm.value,this.data.id).subscribe(res=>{
      this.refresh.setReresh('refresh');
      this.dialog.closeAll();

    })

  }

}
