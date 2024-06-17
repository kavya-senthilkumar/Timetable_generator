// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private username: string ='';
constructor(){}
setUsername(username: string): void {
  this.username = username;
}

getUsername(): string {
  return this.username;
}
}