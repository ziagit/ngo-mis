import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DelegationService } from '../../services/delegation.service';
import { RefDelTypeService } from '../../refreshDelegationType/ref-del-type.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-del-type-dialog',
  templateUrl: './del-type-dialog.component.html',
  styleUrls: ['./del-type-dialog.component.scss']
})
export class DelTypeDialogComponent implements OnInit {
  [x: string]: any;

  constructor(private formBuilder: FormBuilder, private delegationTypeService:DelegationService, private refresh:RefDelTypeService,private dialog :MatDialog) { 
    this.createForm();
  }

  ngOnInit() {
  }

  
  createForm() {
    this.orgForm = this.formBuilder.group({
      delegationType: ['', Validators.required],
    });
  }
  

  addDelType(data){
    if(this.orgForm.valid){
     this.delegationTypeService.addDelegationType(data.value).subscribe((result)=>{
       this.refresh.setReresh('refresh');
      this.dialog.closeAll();

     });
     
  }
    
  }

}
