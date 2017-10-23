import { Component, TemplateRef, OnInit } from '@angular/core';
import { CrudService } from "../services/crud.service";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
@Component({
      moduleId: module.id,
         
  selector: 'crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
   providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
})
export class CrudComponent implements OnInit {
        links: any[];
        res: string;
       


//         myphoto: FormControl;
//         photoname: FormControl;
//         image: string;
//         img: string;
//         isActive:boolean= false;
        
//    complex: FormGroup;
//       public modalRef: BsModalRef;
// constructor(private crudService: CrudService,
//  private modalService: BsModalService,
// fb: FormBuilder)
// {
//          this.complex = fb.group({
//            'file' :  [null,Validators.required],
//            'Email' :  [null,Validators.required],
//            'DOB' :  [null,Validators.required]

//          })
// }
//         submitForm(data)
//         { 
//             var res= new User
//             {
//                 res.Image=this.img
//                 res.Email=data.Email
//                 res.DOB=data.DOB
//             }
//               this.image=this.img
//             this.crudService.create(res)
//             .subscribe(
//             data => {
//             // this.toasterService.showToaster('Successfully Added');
//             alert("image saved");
//                 },
            
//             );
//         }
          
 
//      onUploadFinished(event)
//      {
//     this.img=event.src
  
//      }
// showImage(tempDelete:TemplateRef<any>,model:any){
// this.crudService.getAllById(3)
//             .subscribe(
//             data => {
//             this.image=data.Image
//                 },
            
//             );  
//                 this.modalRef = this.modalService.show(tempDelete);
//   }
//  open(model:any)
//  {
//      console.log(model);
        id: any;
        modalRef: BsModalRef;
        complexForm: FormGroup;
        UserInfo:any;
        info:any;
        urls:any[]=[
                    "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWbZ9R?ver=ab37&q=60&m=8&h=472&w=1259&b=%23FFFFFFFF&l=f&x=0&y=210&s=2120&d=795",
                    "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW52ck?ver=dc4f&q=60&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=152&s=2046&d=767"

        ]
        information:any[]
    
    constructor(private fb: FormBuilder,
                private crudService: CrudService,
                private modalService: BsModalService
    ){
         
     
      
    };


     isActive(url: string) {
        return url === this.links[1];
    }
    ngOnInit(): void {
         this.complexForm = this.fb.group({
           
           'Id' :  [null],

           'Name' :  [null,Validators.required],

           'Phone' : [null,Validators.required],

           'Email' : [null,Validators.required],

           'Address' : [null,Validators.required],

           'State' : [null,Validators.required],

           'City' : [null,Validators.required],
                     
           'MaritalStatus' : [null],
      },
          
        )
          this.crudService.getAll().subscribe(data => {
            console.log(data);
            this.info = data;
        });
        this.links= this.urls
       
        
       
       // carousel.carousel();
    
        }

    edit(tempEdit:TemplateRef<any>,model:any){
        this.UserInfo=model;
        this.modalRef = this.modalService.show(tempEdit);
    }
    submitFormForEdit(model:any)
    {
        this.crudService.update(model).subscribe(
        data => {
        // this.toasterService.showToaster('Successfully Added');
            },
        
        );
    }
    delete(tempDelete:TemplateRef<any>,model:any){
        this.UserInfo=model;
        this.modalRef = this.modalService.show(tempDelete);
    }
    deleteUser(model:any)
    {
        this.id=model.Id
        this.crudService.delete(this.id).subscribe(
        data => {
                this.ngOnInit();
            },

        );
     }
    public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    }
   submitForm(model:any)
     {
         this.crudService.create(model).subscribe(
           data => {
               this.ngOnInit();
            },
           error=>
           {
               console.log(error);
           }
     );
  }
  reFresh()
  {
     this.ngOnInit();
  }
}
class User{
    public Image:string;
    public DOB:string;
    public Email:string;

}

