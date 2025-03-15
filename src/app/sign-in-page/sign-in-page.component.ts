import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { signUp } from '../dataType';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.css'
})
export class SignInPageComponent {
  constructor(private user:UserServiceService,private router:Router){}

  onSubmit(userData:signUp){
    console.warn(userData)
      this.user.userSignUp(userData)
  }
  navigateToLogIn(){
    this.router.navigate(['/login'])
  }
}
