import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterService } from './components/register/register.service';
import { LoginService } from './components/log-in/log-in.service';
import { AngularMaterialModule } from './angular-material.module';

import { ToastrModule } from 'ngx-toastr';
import { KarsComponent } from './components/kars/kars.component';
import { CreateKarComponent } from './components/kars/modal/create-kar/create-kar.component';
import { KarsService } from './components/kars/kars.service';
import { KarDetailsComponent } from './components/kars/kar-details/kar-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    KarsComponent,
    CreateKarComponent,
    KarDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [RegisterService, LoginService, KarsService],
  entryComponents: [CreateKarComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
