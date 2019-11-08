import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { AddKeypersonsComponent } from './dialogs/add-keypersons/add-keypersons.component';
import { EditKeyspersonalOrgsComponent } from './dialogs/edit-keyspersonal-orgs/edit-keyspersonal-orgs.component';
import { KeypersonsServiceService } from './keypersonsService/keypersons.service';

@Component({
  selector: 'app-keypersons',
  templateUrl: './keypersons.component.html',
  styleUrls: ['./keypersons.component.scss']
})
export class KeypersonsComponent implements OnInit {

  dataSource;
  animal:any;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  displayedColumns: string[] = ['id','name','fatherName','possition','phone','email',
  'NIC','gender','education','address','organization_id','action'];



  constructor(private dialog:MatDialog, private keypersonsSerivces:KeypersonsServiceService) {
    
   }
 
  ngOnInit() {
    
    this.keypersonal();
  }

  openDialog(): void {
      const dialogRef = this.dialog.open(AddKeypersonsComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
      this.animal = result;
      this.keypersonal();
      
    });

   
   }

   keypersonal() {
     this.keypersonsSerivces.getKeyPersonalAsDb().subscribe((res)=>{
      this.dataSource =  new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator; 
        // console.log("data is ",res);
     });
   }

   deletekeyspersonal(id) 
   {
     this.keypersonsSerivces.deletekeyspersonal(id).subscribe((data) =>{
        alert("are you sure you want to delelte it !!");
        // console.log("",data);
        this.keypersonal();
     });

   }

   editKeyspersonal(data): void {
    const dialogRef = this.dialog.open(EditKeyspersonalOrgsComponent, {
    width: '600px',
    data: data,
  });

  dialogRef.afterClosed().subscribe(result => {
    this.keypersonal();
     console.log('The dialog was closed');
    this.animal = result;
    
  });



  }

}

