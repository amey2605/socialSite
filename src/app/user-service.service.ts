import { Injectable } from '@angular/core';
import { login, product, signUp } from './dataType';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

userEmail: string | null = null;
  private userData=new BehaviorSubject<signUp|null>(null);
  userData$=this.userData.asObservable()
  

  constructor(private http:HttpClient,private router:Router) {
    
    this.loadUserEmail() ;
    const storedUser = localStorage.getItem('user');
if (storedUser) {
  this.userData.next(JSON.parse(storedUser) as signUp);
} else {
  this.userData.next(null);
  }
}
  
  

  isLoggedIn=new BehaviorSubject<boolean>(false)
  isLoginUnSuccessfull=new BehaviorSubject<boolean>(false)
  userSignUp(userData:signUp){
      return this.http.post(`http://localhost:8080/user/`,userData,{observe:'response'}).subscribe((result)=>{
        if(result){
          //console.log(result)
          this.router.navigate(['/login'])
        }
      })
  }
  logOut(){
    localStorage.removeItem('user');
    localStorage.removeItem('userPosts');
    this.userEmail=null
    this.userData.next(null)
    this.myPost.next([]);
  }

  loadUserEmail() {
    const userData = localStorage.getItem('user');
  
      this.userEmail = userData?JSON.parse(userData).email:'';
    
  }
  private myPost=new BehaviorSubject<product[]>([])
  myPost$=this.myPost.asObservable();

  getuserPosts(){
    if (!this.userEmail) {
      console.warn("User email not set. Cannot fetch posts.");
      return;
    }
    this.http.get<product[]>(`http://localhost:8080/product/${encodeURIComponent(this.userEmail)}`).subscribe({
      next: (products) => {
        this.myPost.next(products); // Update in service
      },
      error: (error) => {
        if(error.status==404){
          console.warn('No posts found for this user.');
          this.myPost.next([]);
        }
      }
    })
  }
  private allPost=new BehaviorSubject<product[]>([])
  all$=this.myPost.asObservable();
  getAllUserPosts(){
    this.http.get<product[]>(`http://localhost:8080/product/allUsers`).subscribe({
      next: (products) => {
        this.myPost.next(products); // Update in service
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    })
  }

  addPost(postContent:product){
    if (!this.userEmail) {
      
      return;
    }
      
      this.http.post(`http://localhost:8080/product/${encodeURIComponent(this.userEmail)}`,postContent,{observe:'response'}).subscribe({
        next: () => {
          this.getuserPosts();// Fetch updated products
          console.warn(postContent)
          this.router.navigate(['/profile'])
        },
        error: (error) => {
          console.error('Error adding product:', error);
        }
      })
  }
  
  deletePostById(idd:string){
    if (!this.userEmail) {
      
      return;
    }
      this.http.delete(`http://localhost:8080/product/${encodeURIComponent(this.userEmail)}/${encodeURIComponent(idd)}`).subscribe((result)=>{
        if(result){
          
          this.getuserPosts();
          this.router.navigate(['/profile'])

        }
      })
  }

  userLogin(userData: login) {
    this.http.post(`http://localhost:8080/user/login`, userData, { observe: 'response' })
      .subscribe({
        next: (result) => {
          if (result.status === 200) {
            
          
            this.isLoggedIn.next(true);
            this.isLoginUnSuccessfull.next(false)
             const data=result.body as signUp
            localStorage.setItem("user", JSON.stringify(result.body));
            if(result && result.body){
              this.userData.next(data); 
          } 
          
          
          this.userEmail = data.email;
          this.getuserPosts();
            //console.warn(this.isLoggedIn.value);
            this.router.navigate(['/userFeed']);
          }
        },
        error: (error) => {
          if (error.status === 401) {
            this.isLoggedIn.next(false);
            this.isLoginUnSuccessfull.next(true);
            //console.warn("Login unsuccessful:", this.isLoginUnSuccessfull.getValue());
          }
        }
      });
  }
  

}
