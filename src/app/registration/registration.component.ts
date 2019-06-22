import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  values={};
  Info=[];

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.minLength(10),Validators.pattern(/^[6-9]\d{9}$/)]],
      country: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      dateofBirth:['', Validators.required]
    });
    
  
  }
 

  countries = [{'id':1, 'name':'Computers'}, {'id':2, 'name': 'Electronics'}, {'id':3, 'name': 'Electrical'},{'id':4, 'name': 'Mechanical'},{'id':5, 'name': 'Civil'}];
  get f() { return this.registerForm.controls; }


 
    
        
        addDetails(){
          this.submitted = true;

          // stop here if form is invalid
          if (this.registerForm.invalid) {
              return;
          }
          

          this.userService.postDetails(this.registerForm);
            
        this.registerForm.reset();
              
        }
        
    
      }
    
