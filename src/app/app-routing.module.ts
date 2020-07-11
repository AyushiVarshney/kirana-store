import { SignInComponent } from './sign-in/sign-in.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { ShopSignupComponent } from './shop-signup/shop-signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"shop-signup", component:ShopSignupComponent},
  {path:"customer-signup", component:CustomerSignupComponent},
  {path:"#", component:SignInComponent,},
  {
    path:"",component:SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
