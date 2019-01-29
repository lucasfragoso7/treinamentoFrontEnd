import { Injectable } from '@angular/core';
import{User} from '../models/user'
import { element } from '@angular/core/src/render3';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  Users:Array<User> = new Array<User>(); 
  
  constructor() { }

  addUser( newUser:User){
    this.Users.push(newUser);
  }

  editUser(newUser:User){

   this.Users.forEach(User =>  {
     if(User.id == newUser.id){
       User=newUser;
     }
   });
  }

  login(email:string,password:string):boolean{
   let isTrue :boolean;
    this.Users.forEach(User=>{
      if(User.email==email && User.password==password){
        isTrue=true;;
      }
    })
    return isTrue;
    
  }
  getUser(nUser:User):User{
    let variabUser :User;
    this.Users.forEach(User=>{
      if(User.id == nUser.id){
        variabUser = User;
      }
    })
    return variabUser;
  }
  delUser(nUser:User){
    this.Users.splice(this.Users.indexOf(nUser),1);
   }
}
