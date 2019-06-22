import { Component, OnInit } from '@angular/core';
import {RegistrationComponent } from '../registration/registration.component';
import { UserServiceService } from '../user-service.service';
import { Router,RouterModule} from '@angular/router';
import { DateFormatter } from 'ngx-bootstrap/datepicker/public_api';
@Component({ 
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
 
  Info=[];
  flag=false
  save=false
 
  selected;
  constructor(private roter:RegistrationComponent , private userService: UserServiceService) { 
    
  }

  ngOnInit() {
  }

  edit(j){
    console.log(this.Info[j])
    this.save=true
    this.selected=j
  }
 
  update(j){
    this.selected=-j
   this.userService.postDetails(this.Info[j])
    }


getDetails(){
  this.userService.getUserDetails()
  .subscribe(data => this.Info = data);

}

}
