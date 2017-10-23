

import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";

const route: Routes=[
    {
        path:'',
        component:LoginComponent
    }
];
export const LoginRouting= RouterModule.forChild(route);