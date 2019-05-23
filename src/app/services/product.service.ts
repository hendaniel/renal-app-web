import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Alimento } from '../models/base';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(alimento: Alimento,propiedades:String){
    const body = new HttpParams()
    .set("categoria", alimento.categoria + "")
    .set("nombre", alimento.nombre + "")
    .set("tipo", alimento.tipo + "")
    .set("propiedades", propiedades+"");
    return this.http.post<Alimento>(environment.urlAddAlimento, body);
   }
}
