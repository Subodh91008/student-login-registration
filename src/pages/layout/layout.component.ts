import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthserviceService } from '../../core/authservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{

isLoggedIn = false;

constructor(private authService: AuthserviceService, private router: Router) {
  this.authService.isLoggedIn$.subscribe((status) => {
    this.isLoggedIn = status;
  });
}
  ngOnInit(): void {
  
  }

login() {
  this.authService.login();
  this.router.navigateByUrl('login'); // Redirect to home after login
}

logout() {
  this.authService.logout();
  this.router.navigate(['/']); // Redirect to home after logout
}
}
