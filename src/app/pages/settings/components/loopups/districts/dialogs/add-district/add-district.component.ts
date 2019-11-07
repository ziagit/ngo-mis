import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { District } from '../../District';
import { DistrictService } from '../../../services/district.service';
import { MatDialog } from '@angular/material';
import { RefreshService } from '../../../refreshService/refresh.service';

@Component({
  selector: 'app-add-district',
  templateUrl: './add-district.component.html',
  styleUrls: ['./add-district.component.scss']
})
export class AddDistrictComponent implements OnInit {

  province = new District();
  orgForm: FormGroup;

  constructor(private dialog: MatDialog,private refresh:RefreshService,private formBuilder: FormBuilder,private dataService:DistrictService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.orgForm = this.formBuilder.group({
      districtName: ['', Validators.required],
      districtCode: ['', Validators.required],
      drovince_id: ['', Validators.required]
    });
  }

  insertData(data){
    this.dataService.insertDistrictData(data.value).subscribe(res=>{
      this.refresh.setRefresh('refresh');
      this.dialog.closeAll();
    })
  }

}
