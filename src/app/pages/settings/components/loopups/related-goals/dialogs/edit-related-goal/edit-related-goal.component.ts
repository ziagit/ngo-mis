import { Component, OnInit, Inject } from '@angular/core';
import { RelatedGoalServiceService } from '../../service/related-goal-service.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RelatedGoal } from '../../RelatedGoal';
import { RefreshService } from '../../../refreshService/refresh.service';

@Component({
  selector: 'app-edit-related-goal',
  templateUrl: './edit-related-goal.component.html',
  styleUrls: ['./edit-related-goal.component.scss']
})
export class EditRelatedGoalComponent implements OnInit {

  relatedgoal = new RelatedGoal();
  orgForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any, 
    private formBuilder: FormBuilder, 
    private service: RelatedGoalServiceService,
    private dialog: MatDialog,
    private refresh:RefreshService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.orgForm = this.formBuilder.group({
      relatedGoalsdesc: [this.data.relatedGoalsdesc, Validators.required]
    });
  }

  edittData(){
    this.service.editRelatedGoal(this.orgForm.value, this.data.id).subscribe(res=>{
    this.refresh.setRefresh('refresh');
      this.dialog.closeAll();
    })
  }

}
