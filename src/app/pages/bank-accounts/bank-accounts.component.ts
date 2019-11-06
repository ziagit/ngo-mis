import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material';


const ELEMENT_DATA: IBankAccount[] = [
  {position: 4 ,organization_id:1,project_id:7,keyspersonnel_id:6, name: 'Hydrogen', location: 'کابل',currency: 'افغانی' ,option:'y',},
  {position: 2 ,organization_id:2 ,project_id:8,keyspersonnel_id:5, name: 'Helium', location: 'مزار', currency: 'دالر' ,option:'y'},

 
  
];

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.scss']
})
export class BankAccountsComponent implements OnInit {
  displayedColumns: string[] = ['position' ,'organization_id','project_id','keyspersonnel_id', 'name', 'location', 'currency','option'];
  dataSource;
 
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private dialog: MatDialog, private service:BankAccountsService) {
    this.getAccount();
   }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(){
    this.service.getRefresh().subscribe(result=>{
    this.getAccount();
     
    
    });
  }
 
  addAccount(): void {
    const dialogRef = this.dialog.open(AddAccountComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
getAccount(){
  this.service.getBankAccounts().subscribe(res=>{
    
    this.dataSource = new MatTableDataSource(res);
     console.log("check for optiosn: ",res);
    this.dataSource.paginator = this.paginator;

  });
}


editAccount(editData): void
{
  const dialogRef = this.dialog.open(BankEditComponent, {
    width: '800px',
    data: editData
  });
}
deleteAccount(id){
  const dialogRef = this.dialog.open(DeleteAccountComponent, {
    width: '400px',
    data:id
  });
 
 

  
}
}
