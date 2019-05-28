import { Component, OnInit } from '@angular/core';
import { user } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  usuario: user;
  contrasena: string;
  nombre: string;
  rol: string;

  constructor() { 
    this.usuario = new user();
    this.usuario.nombre = "David";
    this.usuario.contrasena = "111111";
  }

  ngOnInit() {
  }
  login(){
    if(this.contrasena == this.usuario.contrasena && this.nombre == this.usuario.nombre){
      console.log("Falta servicio");
      console.log(this.rol)
    }
    
  }
}
