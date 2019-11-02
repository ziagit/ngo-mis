import { Component, OnInit } from '@angular/core';
import { AssessmentTypeService } from './assessment-type.service';

@Component({
  selector: 'app-assessment-types',
  templateUrl: './assessment-types.component.html',
  styleUrls: ['./assessment-types.component.scss']
})
export class AssessmentTypesComponent implements OnInit {

  constructor(private service: AssessmentTypeService) {
    this.service.getAssessments().subscribe(res=>{
      console.log("My data from database: ", res);
    })
   }

  ngOnInit() {
  }

}
