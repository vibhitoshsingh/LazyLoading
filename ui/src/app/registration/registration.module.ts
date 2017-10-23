import { NgModule } from '@angular/core'
import { RegistrationComponent } from "./registration.component";
import { RegistrationRouting } from "./registration.routing";

@NgModule({
    declarations:[RegistrationComponent],
    imports:[RegistrationRouting]

})
export class RegistrationModule{

}