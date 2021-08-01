import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse, AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoggedIn: boolean = true;
  isLoading: boolean = false;
  error: String;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

  switchLoginMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }

    const email =  form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    let obsAuth: Observable<AuthResponse>;

    if(this.isLoggedIn) {
      obsAuth = this.authService.logIn(email, password);      
    } else {
      obsAuth = this.authService.signUp(email, password);
  }

  obsAuth.subscribe((data) => {
    console.log(data);
    this.isLoading = false;
    this.error = null;
    this.router.navigate(['/arts']);
  }, errorMes => {
    console.log(errorMes);
    this.error = errorMes;
    this.isLoading = false;    
  });
    form.reset();
  }

}
