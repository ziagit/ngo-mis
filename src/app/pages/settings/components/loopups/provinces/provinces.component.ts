import { Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { DataService } from '../services/data.service';




 

@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.scss']
})
export class ProvincesComponent implements OnInit {

  

  constructor( private dataService: DataService) {
    dataService.getProvince().subscribe(res=>{
      console.log("my data: ", res)
    })
   }

  ngOnInit() {
  }

}
