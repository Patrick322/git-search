import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  constructor(private http:Http) {
    
   }
}
