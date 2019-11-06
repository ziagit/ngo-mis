import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EquipmentService } from '../../services/equipment.service';
import { RefreshEquiptTypeService } from '../../services/refresh-equipt-type.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-equipt-type',
  templateUrl: './add-equipt-type.component.html',
  styleUrls: ['./add-equipt-type.component.scss']
})
export class AddEquiptTypeComponent implements OnInit {
  [x: string]: any;

  constructor(private diolog:MatDialog, private formBuilder: FormBuilder, private EqptType: EquipmentService, private refresh:RefreshEquiptTypeService) { 
    
    this.createForm();
  }

  ngOnInit() {
  }

  
  
  addEquiptType(data){
    if(this.orgForm.valid){
     this.EqptType.addEquiptType(data.value).subscribe((result)=>{
       this.refresh.setReshresh('refresh');
       this.diolog.closeAll();
      
     });
  }
  }
  createForm() {
    this.orgForm = this.formBuilder.group({
      equipType: ['', Validators.required],
    });
  }
  
 


}
