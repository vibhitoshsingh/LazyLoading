import { NgModule } from '@angular/core'
import { CrudComponent } from "./crud.component";
import { CrudRouting } from "./crud.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { NgGridModule } from "angular2-grid/main";
import { ModalModule, BsModalService } from "ngx-bootstrap/modal";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ImageUploadModule } from "angular2-image-upload";
import { CrudService } from "../services/crud.service";
import { AuthService } from "../services/auth.service";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[CrudComponent],
    imports:[CrudRouting,
    
    CommonModule,
    ReactiveFormsModule,

   ],

})
export class CrudModule{

}