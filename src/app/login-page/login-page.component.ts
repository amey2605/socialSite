import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from '../dataType';
import { UserServiceService } from '../user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  
  constructor(private router: Router,public userService:UserServiceService) {
    
  }
  IsLoginUnSuccessfull=this.userService.isLoginUnSuccessfull
  isUserLogged=this.userService.isLoggedIn
  
  
  email: string = '';
  password: string = '';

  onLogin(userData:login){
    this.userService.userLogin(userData)
    //console.warn(this.IsLoginUnSuccessfull.value)
    
    
  }
  navigateToSignIn(){
    this.router.navigate(['/signin'])
  }

}
