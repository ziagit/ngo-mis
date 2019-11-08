import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AddDelegationsComponent } from './dialogs/add-delegations/add-delegations.component';




@Component({
  selector: 'app-delegations',
  templateUrl: './delegations.component.html',
  styleUrls: ['./delegations.component.scss']
})
export class DelegationsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(AddDelegationsComponent, {
      width: '600px',
    });

  }


}
