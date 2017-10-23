import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CrudComponent } from "./crudoperation/crud.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { AppComponent } from "./app.component";


const routes: Routes = [
    //   { path: 'login',        component: LoginComponent },
    {path: '', component: AppComponent,
        children: [
            {
                path: '',
                loadChildren: './crudoperation/crud.module#CrudModule',
            },
            { 
                path: 'login',  
        loadChildren:'./login/login.module#LoginModule'
            },
             {
        path:'registration',

        loadChildren:'./registration/registration.module#RegistrationModule'
        
              },
        ]
    }
];                 

 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule {

}