import { Component, OnInit } from '@angular/core';
import { BudjetTypeService } from './budjet-types.service';


@Component({
  selector: 'app-budjet-types',
  templateUrl: './budjet-types.component.html',
  styleUrls: ['./budjet-types.component.scss']
})
export class BudjetTypesComponent implements OnInit {

  constructor(private service: BudjetTypeService) {
    this.service.getBudjetTypes().subscribe(res=>{
      console.log("data from database: ", res)
    })
   }

  ngOnInit() {
    
  }



  
  
}
