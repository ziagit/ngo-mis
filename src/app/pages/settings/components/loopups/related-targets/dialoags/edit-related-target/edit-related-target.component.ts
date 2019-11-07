import { Component, OnInit, Inject } from '@angular/core';
import { RelatedTarget } from '../../RelatedTarget';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RelatedTargetSerivceService } from '../../service/related-target-serivce.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { RefreshService } from '../../../refreshService/refresh.service';

@Component({
  selector: 'app-edit-related-target',
  templateUrl: './edit-related-target.component.html',
  styleUrls: ['./edit-related-target.component.scss']
})
export class EditRelatedTargetComponent implements OnInit {

  
  relatedtarget = new RelatedTarget();
  orgForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any, 
    private formBuilder: FormBuilder, 
    private service: RelatedTargetSerivceService,
    private dialog: MatDialog,
    private refresh:RefreshService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.orgForm = this.formBuilder.group({
      relatedTargetdesc: [this.data.relatedTargetdesc, Validators.required],
      relatedGoals_id: [this.data.relatedGoals_id, Validators.required]
    });
  }

  edittData(){
    this.service.editRelatedTarget(this.orgForm.value, this.data.id).subscribe(res=>{
    this.refresh.setRefresh('refresh');
    this.dialog.closeAll();
    })
  }

}
