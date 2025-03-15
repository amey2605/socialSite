import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { product, signUp } from '../dataType';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-feet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-feet.component.html',
  styleUrl: './user-feet.component.css'
})
export class UserFeetComponent {

  constructor(private userService: UserServiceService){}
  
allPosts:product[]=[]
username:string =""
ngOnInit(){
  if(this.userService.userEmail!=null){
  this.username=this.userService.userEmail}
  this.userService.getAllUserPosts()
  this.userService.myPost$.subscribe((result)=>{
    this.allPosts=result
  })
}
  

}
