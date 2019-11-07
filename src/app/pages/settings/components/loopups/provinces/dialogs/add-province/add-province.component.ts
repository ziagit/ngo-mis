import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProvinceService } from '../../../services/province.service';
import { Province } from '../../Province';
import { MatDialog } from '@angular/material';
import { RefreshService } from '../../../refreshService/refresh.service';

@Component({
  selector: 'app-add-province',
  templateUrl: './add-province.component.html',
  styleUrls: ['./add-province.component.scss']
})
export class AddProvinceComponent implements OnInit {

  province = new Province();
  orgForm: FormGroup;
  
  constructor
  (
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private dataService: ProvinceService,
    private refresh:RefreshService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.orgForm = this.formBuilder.group({
      provinceName: ['', Validators.required],
      provinceCode: ['', Validators.required]
    });
  }

  insertData(data)
  {
    this.dataService.insertProvinceData(data.value).subscribe(res=>{
      this.refresh.setRefresh('refresh');
      this.dialog.closeAll();
    })
  }


  
}
