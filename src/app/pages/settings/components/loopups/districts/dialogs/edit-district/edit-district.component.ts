import { Component, OnInit, Inject } from '@angular/core';
import { District } from '../../District';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DistrictService } from '../../../services/district.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { RefreshService } from '../../../refreshService/refresh.service';

@Component({
  selector: 'app-edit-district',
  templateUrl: './edit-district.component.html',
  styleUrls: ['./edit-district.component.scss']
})
export class EditDistrictComponent implements OnInit {

  distirct = new District();
  orgForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
    private dataService: DistrictService,
    private dialog: MatDialog,
    private refresh:RefreshService) 
    { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.orgForm = this.formBuilder.group({
      districtName: [this.data.districtName, Validators.required],
      districtCode: [this.data.districtCode, Validators.required],
      drovince_id: [this.data.drovince_id, Validators.required]
    });
  }

  edittData(){
    this.dataService.editDistritc(this.orgForm.value, this.data.id).subscribe(res=>{
    this.refresh.setRefresh('refresh');
      this.dialog.closeAll();
    })
  }

}
