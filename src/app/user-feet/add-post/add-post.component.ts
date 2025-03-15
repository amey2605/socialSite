import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { Router } from '@angular/router';
import { product } from '../../dataType';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  constructor(private userService:UserServiceService,private router:Router){}

  onSubmit(post:product){
    
      this.userService.addPost(post)
      
  }
}
