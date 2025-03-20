import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const userService=inject(UserServiceService)
  const router=inject(Router)

  if(userService.checkIfLoggedIn()){
    return true
  }
  else{
    router.navigate(['/login'])
    return false;
  }

  
};
