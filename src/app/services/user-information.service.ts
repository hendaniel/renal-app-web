import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { User, Company } from "../models/user";
import { environment } from "src/environments/environment";

const TOKEN = "TOKEN";

@Injectable({
  providedIn: "root"
})
export class UserInformationService {
  private user: User;

  constructor(private http: HttpClient) {
    this.user = null;
  }

  getUser(): User {
    return this.user;
  }

  fillUserInfo(user: User) {
    this.user = user;
  }

  isAdmin(): boolean {
    return this.user != null && this.user.tipo == "Administrador";
  }

  isCompany(): boolean {
    return this.user != null && this.user.tipo == "Empresa";
  }

  isLogged(): boolean {
    if (localStorage.getItem(TOKEN) != null && this.getUser() == null)
      this.fillUserInfo(JSON.parse(localStorage.getItem("TOKEN")));
    return this.user != null;
  }

  logout() {
    this.user = null;
    localStorage.removeItem(TOKEN);
  }

  autenticate(username: String, password: String) {
    //console.log("EL TWEET A INSERTAR:", tweet);

    const body = new HttpParams()
      .set("username", username + "")
      .set("password", password + "");

    return this.http.post(environment.urlValidateAdmin, body);
  }

  loggin(information: string) {
    localStorage.setItem(TOKEN, information);
  }

  addAdmin(com: Company){
    console.log(com);
    
    const body = new HttpParams()
    .set("username", com.username + "")
    .set("name", com.nombre + "")
    .set("password", com.password + "")
    .set("type", com.tipo + "");
    console.log(body);
    
    return this.http.post<Company>(environment.urlAddAdmin, body);
   }
}
