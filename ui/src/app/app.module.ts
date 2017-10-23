import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CrudComponent } from "./crudoperation/crud.component";
import { CrudService } from "./services/crud.service";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BsModalService, ModalModule } from "ngx-bootstrap/modal";
import { ImageUploadModule } from "angular2-image-upload";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./services/auth.service";
import { NgGridModule } from "angular2-grid";
import { AppRoutingModule } from "./approuting.module";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { RegistrationComponent } from "./registration/registration.component";
import { CrudModule } from "./crudoperation/crud.module";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
   AppComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      NgGridModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule,
      ModalModule.forRoot(),
      ReactiveFormsModule,
      CarouselModule.forRoot(),
      ImageUploadModule.forRoot(),
  ],
  providers: [ CrudService,AuthService,
  BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
