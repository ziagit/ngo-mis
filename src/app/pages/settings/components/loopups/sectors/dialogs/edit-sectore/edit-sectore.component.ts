import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { sector } from '../../sector';
import { SectoreService } from '../../service/sectore.service';
import { RefreshService } from '../../../refreshService/refresh.service';

@Component({
  selector: 'app-edit-sectore',
  templateUrl: './edit-sectore.component.html',
  styleUrls: ['./edit-sectore.component.scss']
})
export class EditSectoreComponent implements OnInit {

  province = new sector();
  orgForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any, 
    private formBuilder: FormBuilder,
    private service: SectoreService,
    private dialog: MatDialog,
    private refresh:RefreshService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.orgForm = this.formBuilder.group({
      sectorName: [this.data.sectorName, Validators.required],
      proirity: [this.data.proirity, Validators.required]
    });
  }

  editData(){
    this.service.editSectore(this.orgForm.value, this.data.id).subscribe(res=>{
    this.refresh.setRefresh('refresh');
      this.dialog.closeAll();
    })
  }

}
