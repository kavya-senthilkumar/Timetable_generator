import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimetableComponent } from './timetable/timetable.component';
import { InputFormComponent } from './input-form/input-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { cartComponent } from './cart/cart.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  { path: 'detail',component:DisplayComponent},
  {path: 'cart',component:cartComponent},
  { path: 'timetable/:numClasses/:numTeachers', component: TimetableComponent },
  { path: 'input', component: InputFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
