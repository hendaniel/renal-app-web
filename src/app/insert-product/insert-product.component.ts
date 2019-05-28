import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/product.service";
import { MatSnackBar } from "@angular/material";
import { Alimento } from "../models/base";
import { Properties } from "../models/preset";
import { Logs } from 'selenium-webdriver';
import { Propiedad } from '../models/propiedad';

@Component({
  selector: "app-insert-product",
  templateUrl: "./insert-product.component.html",
  styleUrls: ["./insert-product.component.css"]
})
export class InsertProductComponent implements OnInit {
  val:  number;
  myProduct: Alimento;
  myProperties: Array<number>;
  propertyNames: Array<String>;
  propertyUnits: Array<String>;
  propiedades: Array<Propiedad>;
  extract: Array<any>;

  constructor(
    private productService: ProductService,
    private snack: MatSnackBar
  ) {
    this.propiedades = new Array<Propiedad>();
    this.myProduct = new Alimento();
    this.myProperties = new Array<number>();
    this.extract = new Array<any>();
    this.propertyNames = new Array<String>();
    this.propertyUnits = new Array<String>();
    JSON.stringify(this.myProperties);
    this.extract.push(Properties);
    console.log(this.extract);
    this.propiedades = this.productService.getPropiedades();
    console.log("HERE");
    
    console.log(this.propiedades);
    for (let entry in this.extract[0]) {
      this.propertyNames[entry] = this.extract[0][entry].nombre;
      this.propertyUnits[entry] = this.extract[0][entry].unidad;
      this.myProperties[entry]=0;
    }
    this.myProperties[2]=1;
    console.log(this.propertyUnits);
    


  }

  ngOnInit() {}


  onChange(i:number){
    console.log("xd"+i);
  }

  addProperty(i:number,val:number){
    this.myProperties[i]=val;
  }

  clearProp(k:number){
    this.myProperties[k]=0;
  }

  addProduct(){
    console.log("add product");
    this.productService.addProduct(this.myProduct,JSON.stringify(this.myProperties)).subscribe();
    this.snack.open("Sirvió: ","",{duration: 1000});
    this.myProduct = new Alimento();
    for (let entry in this.extract[0]) {
      this.myProperties[entry]=0;
    }
  }

  

}
