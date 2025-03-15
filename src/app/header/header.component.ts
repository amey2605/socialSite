import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public userService:UserServiceService, private router: Router) {}
  isUserLogged=this.userService.isLoggedIn

  ngOnInit(){
    this.userService.userData$.subscribe((result)=>{
      if(result){
        this.userService.isLoggedIn.next(true)
      }
    })
  }
  navigateToProfile(){
    this.userService.getuserPosts()
    this.router.navigate(['/profile'])
  }
  navigateToUserHome(){
    this.router.navigate(['/userFeed'])
  }
navigateToLogin(){
  //this.userService.isLoggedIn.next(true)
  this.router.navigate(['/login']);
  
  
}
navigateToHome(){
  this.userService.logOut()
  this.userService.isLoggedIn.next(false)
  this.router.navigate(['/'])
}

}
