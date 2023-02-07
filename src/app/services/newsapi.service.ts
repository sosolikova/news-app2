import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  topHeadlinesPath = environment.baseURL;


  constructor(private http:HttpClient) { }

  getTopCountryHeadlines(country:string, category:string){
    return this.http.get(this.topHeadlinesPath+
      `?country=${country}$category=${category}$pageSize=10&apiKey=${environment.apiKey}`
    );
  }
}
