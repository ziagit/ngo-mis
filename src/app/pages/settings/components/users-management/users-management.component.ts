import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddUserComponent } from './dialogs/add-user/add-user.component';



export interface PeriodicElement {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, username: 'Hydrogen', email: 'zia.csco@gmail.com', password: 'H', role: 'admin'},
  {id: 2, username: 'Helium', email: 'zia.csco@gmail.com', password: 'He', role: 'guest'},

];
@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  animal:any;
  constructor(private dialog: MatDialog){}

  ngOnInit(){}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
