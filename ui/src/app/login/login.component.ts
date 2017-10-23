import { Component } from '@angular/core'
import { FormGroup } from "@angular/forms/src/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { CrudService } from "../services/crud.service";

@Component({

selector: 'login',
templateUrl:'./login.component.html',
//styleUrls:['./login.component.css']
})
export class LoginComponent{
   loginForm:FormGroup

constructor(fb:FormBuilder,
           private service:CrudService)
{
   this.loginForm = fb.group({
       'username':['', Validators.required],
       'password':['',Validators.required]
   })
}


// login(model)
// {
//     this.service.loginUser(model).subscribe(data=>{
//         console.log(data);
//     })
// }
}
