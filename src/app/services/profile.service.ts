import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = 'e7649e9d21074f39c4c5';
  private clientsecret = '7ba2d8c0511a60ef64ea01ae45b1c2f888e5e9ae';
  constructor(private http:Http) {
   console.log("service is now ready!"); 
   this.username = 'Patrick322'
   }
   getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret); 
   }
}
