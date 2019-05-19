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
  MatSnackBarModule
} from "@angular/material";


@NgModule({
  declarations: [AppComponent, InsertHabitComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,  
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

