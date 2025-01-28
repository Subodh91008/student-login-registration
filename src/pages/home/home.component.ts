import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

 constructor(private router:Router){}
 login1:boolean=false;
  
 
 ngOnInit(): void {
  this.tokenMethod();
  }
 tokenMethod(){
  const token= localStorage.getItem('token');
  debugger
  if(token!=null){
   console.log(token);
   this.login1=true;
  }else{
   console.log("token is empty");
  }
 }

  login(){
    this.router.navigateByUrl('login')   
  }

  logout(){
    this.login1=false;
    this.router.navigateByUrl('register');
    localStorage.clear();
  }
  
}
