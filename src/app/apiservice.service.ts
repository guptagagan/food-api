import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
 
  constructor(private http:HttpClient) { }

  ssearch(query:any){
    console.log(query)
    const res = this.http.get(`https://api.edamam.com/search?q=${query.searchresult}&app_id=957e537f&app_key=a27687f780d9d8b87f0073a6872d039f`)
    //console.log(res)
    return res
  }

  // saladd(query:string){
  //   return this.http.get(`https://api.edamam.com/search?q=salad&app_id=8a5e20d0&app_key=f5f198e719e461c9dbefa5d2867fd2a6`)
  // }
  // cakee(query:string){
  //   return this.http.get(`https://api.edamam.com/search?q=cake&app_id=8a5e20d0&app_key=f5f198e719e461c9dbefa5d2867fd2a6`)
  // }
  // pizzaa(query:string){
  //   return this.http.get(`https://api.edamam.com/search?q=pizza&app_id=8a5e20d0&app_key=f5f198e719e461c9dbefa5d2867fd2a6`)
  // }
}
