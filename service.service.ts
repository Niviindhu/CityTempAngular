import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Temperature } from './temperature';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl = 'http://localhost:9000';

  constructor(private http:HttpClient)  { }
    
   getTemperature(City:String):Observable<any>
  {
    console.log(City);

    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+City+"&appid=56724058e93c04beb8781191db4e5e34");
       
     }
    
  }
  
 

