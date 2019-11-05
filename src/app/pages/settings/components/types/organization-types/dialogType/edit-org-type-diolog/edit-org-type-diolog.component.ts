import { Component, OnInit, Inject } from '@angular/core';
import { organizationType } from '../../organizationType';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { OrganizationService } from '../../service/organizationType.service';
import { RefreshTypeService } from '../../../services/refresh-type.service';

@Component({
  selector: 'app-edit-org-type-diolog',
  templateUrl: './edit-org-type-diolog.component.html',
  styleUrls: ['./edit-org-type-diolog.component.scss']
})
export class EditOrgTypeDiologComponent implements OnInit {

  organizationType = new organizationType();
  orgForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private formBuilder: FormBuilder,
  private dialog: MatDialog, 
  private editOrganization: OrganizationService, 
  private refresh:RefreshTypeService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.orgForm = this.formBuilder.group({
      orgType: [this.data.orgType, Validators.required]

    })

  }

  editOrgTypefun(){
    this.editOrganization.updateOrgType(this.orgForm.value,this.data.id).subscribe(res=>{
      this.refresh.setRefresh('refresh');
      this.dialog.closeAll();

    })

  }

}
