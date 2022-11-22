import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { CommentComponent } from './comment/comment.component';
import { AppRouingModule } from './app-routing.module';
import { SignupformComponent } from './signupform/signupform.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    SignupformComponent
  ],
  imports: [
   BrowserModule,
   ReactiveFormsModule,
   AppRouingModule
  ],
 providers: [
   AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
