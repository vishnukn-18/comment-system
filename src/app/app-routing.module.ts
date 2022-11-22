import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { SignupformComponent } from './signupform/signupform.component';

const appRoutes: Routes = [
 { path: '', component: SignupformComponent },
 { path: 'comments', component: CommentComponent }];
@NgModule({
 imports: [
  RouterModule.forRoot(appRoutes)
 ],
 exports:[RouterModule]
})

export class AppRouingModule
{

}