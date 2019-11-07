import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Province } from '../../Province';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ProvinceService } from '../../../services/province.service';
import { RefreshService } from '../../../refreshService/refresh.service';

@Component({
  selector: 'app-edit-province',
  templateUrl: './edit-province.component.html',
  styleUrls: ['./edit-province.component.scss']
})
export class EditProvinceComponent implements OnInit {

  province = new Province();
  orgForm: FormGroup;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any, 
    private formBuilder: FormBuilder, 
    private service: ProvinceService,
    private dialog: MatDialog,
    private refresh:RefreshService) { 
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.orgForm = this.formBuilder.group({
      provinceName: [this.data.provinceName, Validators.required],
      provinceCode: [this.data.provinceCode, Validators.required]
    });
  }

  edittData(){
    this.service.editProvince(this.orgForm.value, this.data.id).subscribe(res=>{
      this.refresh.setRefresh('refresh');
      this.dialog.closeAll();
    })
  }
}
