import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'listUser', component: ListUserComponent},
  { path: 'registration', component: RegistrationComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
