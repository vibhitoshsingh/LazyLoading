

import { Routes, RouterModule } from "@angular/router";
import { CrudComponent } from "./crud.component";

const route: Routes=[
    {
        path:'',
        component:CrudComponent
    }
];
export const CrudRouting= RouterModule.forChild(route);