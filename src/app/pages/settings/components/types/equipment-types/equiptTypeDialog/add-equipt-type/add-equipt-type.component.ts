import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EquipmentService } from '../../services/equipment.service';

@Component({
  selector: 'app-add-equipt-type',
  templateUrl: './add-equipt-type.component.html',
  styleUrls: ['./add-equipt-type.component.scss']
})
export class AddEquiptTypeComponent implements OnInit {
  [x: string]: any;

  constructor(private formBuilder: FormBuilder, private equiptType: EquipmentService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  
  createForm() {
    this.equiptTypeForm = this.formBuilder.group({
      equiptType: ['', Validators.required],
    });
  }
  
  addEquiptType(data){
    if(this.equiptTypeForm.valid){
     this.equiptType.addEquiptType(data.value).subscribe((result)=>{
      console.log(result);
     });
  }
  }



}
