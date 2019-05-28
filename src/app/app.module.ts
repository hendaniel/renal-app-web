import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { InsertHabitComponent } from "./insert-habit/insert-habit.component";

import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSnackBarModule,
  MatSelectModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatGridListModule
} from "@angular/material";




import { InsertProductComponent } from './insert-product/insert-product.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [AppComponent, InsertHabitComponent, InsertProductComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,  
    MatSelectModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

