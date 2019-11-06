import { Component, OnInit } from '@angular/core';
import { sector } from '../../sector';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SectoreService } from '../../service/sectore.service';
import { MatDialog } from '@angular/material';
import { RefreshService } from '../../../refreshService/refresh.service';

@Component({
  selector: 'app-add-sectore',
  templateUrl: './add-sectore.component.html',
  styleUrls: ['./add-sectore.component.scss']
})
export class AddSectoreComponent implements OnInit {

  sector = new sector();
  orgForm: FormGroup;

  constructor(public dialog: MatDialog, private refresh:RefreshService,private formBuilder: FormBuilder,private dataService:SectoreService) { }

  ngOnInit() {
    this.createForm(); 
  }

  createForm() {
    this.orgForm = this.formBuilder.group({
      sectorName: ['', Validators.required],
      proirity: ['', Validators.required]
    });
  }

  insertData(data){
    this.dataService.insertSector(data.value).subscribe(res=>{
      this.refresh.setRefresh('refresh')
      this.dialog.closeAll();
   })
  }
}
