import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { UserFeetComponent } from './user-feet/user-feet.component';
import { MyProfileComponent } from './user-feet/my-profile/my-profile.component';
import { Component } from '@angular/core';
import { AddPostComponent } from './user-feet/add-post/add-post.component';
import { authGuard } from './auth_guards/auth.guard';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'login',component:LoginPageComponent},
    {path:'signin',component:SignInPageComponent},
    {path:'userFeed',component:UserFeetComponent,canActivate:[authGuard]},
    {path:'profile',component:MyProfileComponent,canActivate:[authGuard]},
    {path:'addPost',component:AddPostComponent,canActivate:[authGuard]}
];
