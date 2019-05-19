import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Habito } from '../models/habito';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HabitService {

  constructor(private http: HttpClient) { }

  addHabitService(habito: Habito): Observable<Habito>{
    const body = new HttpParams()
    .set("informacion", habito.informacion + "")
    .set("imagen", habito.imagen + "");
    return this.http.post<Habito>(environment.urlAddHabit, body);
   }
}
