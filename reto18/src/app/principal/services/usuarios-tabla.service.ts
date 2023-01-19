import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosTablaService {

  url = environment.apiUrl + "/todos"

  constructor(private http: HttpClient) { }


  getUsers(): Observable<string> {
    return this.http.get<string>(this.url)
  }
}
