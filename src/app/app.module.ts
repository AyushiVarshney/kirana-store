import { UserTitlePipe } from './pipes/format-title-pipe';
import { SignInComponent } from './sign-in/sign-in.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { ShopSignupComponent } from './shop-signup/shop-signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopSignupComponent,
    UserTitlePipe,
    CustomerSignupComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
