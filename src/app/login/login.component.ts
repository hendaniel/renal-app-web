import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { UserInformationService } from "../services/user-information.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  usuario: User;
  contrasena: String;
  nombre: String;
  message: String;

  constructor(
    private servicioLogin: UserInformationService,
    private router: Router,
    private snack: MatSnackBar
  ) {
    console.log("tst"+servicioLogin.isLogged());
    console.log("tst"+servicioLogin.isAdmin());

    if (servicioLogin.isLogged() && servicioLogin.isAdmin())
      this.router.navigateByUrl("/new_company");
    if (servicioLogin.isLogged() && servicioLogin.isCompany())
      this.router.navigateByUrl("/new_product");
  }

  ngOnInit() {}
  async login() {
    let responseAutentication: any;
    let user: User;
    this.servicioLogin
      .autenticate(this.nombre, this.contrasena)
      .subscribe(dataResponse => {
        responseAutentication = dataResponse;
        console.log(responseAutentication);
        user = <User>responseAutentication;

        if (user != null) {
          this.servicioLogin.loggin(JSON.stringify(user));
          this.servicioLogin.fillUserInfo(user);
          this.message = "Iniciando Sesión";
          console.log(user.tipo);
          this.router.navigateByUrl(user.tipo=="Administrador"?"/new_company":"/new_product");
        } else this.message = "Usuario o contraseña incorrecta.";
        this.snack.open(this.message + "", "", { duration: 1000 });
      });

  }
}
