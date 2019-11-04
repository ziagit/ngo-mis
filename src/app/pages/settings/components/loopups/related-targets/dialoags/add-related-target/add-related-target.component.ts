import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RelatedTarget } from '../../RelatedTarget';
import { RelatedTargetSerivceService } from '../../service/related-target-serivce.service';
import { MatDialog } from '@angular/material';
import { RefreshService } from '../../../refreshService/refresh.service';

@Component({
  selector: 'app-add-related-target',
  templateUrl: './add-related-target.component.html',
  styleUrls: ['./add-related-target.component.scss']
})
export class AddRelatedTargetComponent implements OnInit {

  relatedtarget = new RelatedTarget();
  orgForm: FormGroup;
  
  constructor(private dialog: MatDialog,private refresh:RefreshService,private formBuilder: FormBuilder,private service:RelatedTargetSerivceService) 
  { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.orgForm = this.formBuilder.group({
      relatedTargetdesc: ['', Validators.required],
      relatedGoals_id: ['', Validators.required]
    });
  }

  insertData(data){
    this.service.insertRelatedTarget(data.value).subscribe(resl=>{
    this.refresh.setRefresh('refresh');
    this.dialog.closeAll();
    })
  }

}
