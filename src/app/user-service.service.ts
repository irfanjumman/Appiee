import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() {
    
   }


   postDetails(registerForm) {
    this.localStorage.setItem('user',JSON.stringify(registerForm.value))
  
  }

  getUserDetails(): Observable<any> {
     return localStorage.getItem('user');
    

     }
  }

