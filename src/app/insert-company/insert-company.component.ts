import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../services/user-information.service';
import { User, Company } from '../models/user';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-insert-company',
  templateUrl: './insert-company.component.html',
  styleUrls: ['./insert-company.component.css']
})
export class InsertCompanyComponent implements OnInit {

  userToAdd:  Company;
  passwordC:   String;


  constructor(private userService: UserInformationService,private snack: MatSnackBar) {
    console.log(userService.getUser());
    this.userToAdd = new Company();
   }

  ngOnInit() {
  }

  addCompany(a:String){
    console.log(this.userToAdd);
    this.userService.addAdmin(this.userToAdd).subscribe();
      this.snack.open("Hábito Añadido ","",{duration: 1000});
      this.userToAdd = new Company();
      this.passwordC="";
  }

}
