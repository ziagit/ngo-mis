import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RelatedGoal } from '../../RelatedGoal';
import { RelatedGoalServiceService } from '../../service/related-goal-service.service';
import { MatDialog } from '@angular/material';
import { RefreshService } from '../../../refreshService/refresh.service';

@Component({
  selector: 'app-add-related-goal',
  templateUrl: './add-related-goal.component.html',
  styleUrls: ['./add-related-goal.component.scss']
})
export class AddRelatedGoalComponent implements OnInit {

  relatedgoal = new RelatedGoal();
  orgForm: FormGroup;
  
  constructor(private dialog: MatDialog,private refresh:RefreshService,private formBuilder: FormBuilder,private service:RelatedGoalServiceService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.orgForm = this.formBuilder.group({
      relatedGoalsdesc: ['', Validators.required]
    });
  }

  insertData(data){
    this.service.insertRelatedGoalData(data.value).subscribe(res=>{
      this.refresh.setRefresh('refresh');
      this.dialog.closeAll();
    })
  }
}
