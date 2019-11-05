import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BudjetTypeService } from '../../services/budjet-type.service';
import { RefreshBudjetTypeService } from '../../budjetTypeReresh/refresh-budjet-type.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-b-type-dialog',
  templateUrl: './b-type-dialog.component.html',
  styleUrls: ['./b-type-dialog.component.scss']
})
export class BTypeDialogComponent implements OnInit {
  [x: string]: any;

  constructor(private formBuilder: FormBuilder, private budjetTypeServices:BudjetTypeService, private refresh:RefreshBudjetTypeService, private dialog:MatDialog) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm() {
    this.orgForm = this.formBuilder.group({
      type: ['', Validators.required],
    });
  }

  add(data){
   
     if (this.orgForm.valid) {
      this.budjetTypeServices.budjetTypesadd(data.value).subscribe(res=>{
        this.refresh.setRefresh('refresh');
        this.dialog.closeAll();
       });
    
   
  }

}
}