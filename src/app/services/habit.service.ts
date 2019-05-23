import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Habito } from '../models/base';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HabitService {

  constructor(private http: HttpClient) { }

  addHabitService(habito: Habito){
    console.log(habito);
    
    const body = new HttpParams()
    .set("informacion", habito.informacion + "")
    .set("imagen", habito.imagen + "");
    console.log(body);
    
    return this.http.post<Habito>(environment.urlAddHabit, body);
   }
}
