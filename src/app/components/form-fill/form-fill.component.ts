import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import{FormsModule}from '@angular/forms'
@Component({
  selector: 'app-form-fill',
  imports: [CommonModule,FormsModule],
  templateUrl: './form-fill.component.html',
  styleUrl: './form-fill.component.css'
})
export class FormFillComponent {
constructor(private http:HttpClient){
  
}
private baseURL="https://srihari-bd.vercel.app"
name:string=""
email:string=""
phoneNumber:string=""
message:string=""

submitForm(event:Event){
  event.preventDefault();


this.postForm(event);
  console.log("Form Submitted");
}

postForm(event:Event){

  console.log("checking before the request", this.name,this.email,this.phoneNumber,this.message)
const data={name:this.name,email:this.email,phoneNumber:this.phoneNumber,message:this.message
}
  this.http.post(`${this.baseURL}/form`,data).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(error)=>{
      console.log(error
      )
    }
  })
  
}
}
