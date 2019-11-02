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
  {id: 1, username: 'Hydrogen', email: 1.0079, password: 'H'},
  {id: 2, username: 'Helium', email: 4.0026, password: 'He'},
  {id: 3, username: 'Lithium', email: 6.941, password: 'Li'},
  {id: 4, username: 'Beryllium', email: 9.0122, password: 'Be'},
  {id: 5, username: 'Boron', email: 10.811, password: 'B'},
  {id: 6, username: 'Carbon', email: 12.0107, password: 'C'},
  {id: 7, username: 'Nitrogen', email: 14.0067, password: 'N'},
  {id: 8, username: 'Oxygen', email: 15.9994, password: 'O'},
  {id: 9, username: 'Fluorine', email: 18.9984, password: 'F'},
  {id: 10, username: 'Neon', email: 20.1797, password: 'Ne'},
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
