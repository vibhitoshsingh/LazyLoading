

import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "./registration.component";

const route: Routes=[
    {
        path:'',
        component:RegistrationComponent
    }
];
export const RegistrationRouting= RouterModule.forChild(route);