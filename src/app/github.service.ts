import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}
      
      getUserRepos(username: string, page: number = 1, perPage: number = 10): Observable<any[]> {
        const url = `${this.apiUrl}/users/${username}/repos`;

        if (perPage > 100) {
          perPage = 100;
        }
    
        const params = new HttpParams()
          .set('page', page.toString())
          .set('per_page', perPage.toString());
    
      
        return this.http.get<any[]>(url, { params });
      }
  }

