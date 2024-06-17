import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimetableComponent } from './timetable/timetable.component';
import { InputFormComponent } from './input-form/input-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { cartComponent } from './cart/cart.component';
import { DisplayComponent } from './display/display.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    TimetableComponent,
    InputFormComponent,
    RegisterComponent,
    LoginComponent,
    cartComponent,
    DisplayComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
