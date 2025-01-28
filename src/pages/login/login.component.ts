import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { AuthserviceService } from '../../core/authservice.service';
@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   email:string='';
   constructor(private authService: AuthserviceService, private router: Router) {}
  register(){
  
  this.router.navigateByUrl('register')
  }
  loginform(email:string){
    if(email=='subodh'){
      debugger
     
      this.router.navigateByUrl('all');
      console.log("token set");
   
    }
  }
}
