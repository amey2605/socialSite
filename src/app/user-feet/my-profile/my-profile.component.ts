import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { postId, product, signUp } from '../../dataType';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent {

  constructor(private userService:UserServiceService,private router:Router){
    
  }

  userPost:signUp |null=null
  
  posts:product[]=[]

  navigateToAddPost(){
    this.router.navigate(['/addPost'])
  }

  ngOnInit(){
    this.userService.getuserPosts()
    this.userService.myPost$.subscribe((result)=>{
      this.posts=result
    })
  }

  deletePost(id:string){
    
    console.warn(id)
    this.userService.deletePostById(id)
  }

}
