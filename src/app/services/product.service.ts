import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Alimento } from '../models/base';
import { Propiedad } from '../models/propiedad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private propiedades: Array<Propiedad>;
  constructor(private http: HttpClient) {
    this.propiedades = new Array<Propiedad>();
    this.getNamesPropiedades().subscribe(result => {
      result.forEach(e =>{e.unidad = e.unidad.replace("%B5", "µ")})
      this.propiedades = result;
      console.log(this.propiedades);
      
    });
   }

  addProduct(alimento: Alimento,propiedades:String){
    const body = new HttpParams()
    .set("categoria", alimento.categoria + "")
    .set("nombre", alimento.nombre + "")
    .set("tipo", alimento.tipo + "")
    .set("propiedades", propiedades+"");
    return this.http.post<Alimento>(environment.urlAddAlimento, body);
   }

   getNamesPropiedades(): Observable<Propiedad[]>{
    return this.http.post<Propiedad[]>(environment.urlGetPropiedades, null);
   }

   getPropiedades(): Propiedad[]{
     return this.propiedades;
   }

}
