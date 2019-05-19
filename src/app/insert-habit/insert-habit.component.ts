import { Component, OnInit } from "@angular/core";
import { HabitService } from "../services/habit.service";
import { Habito } from '../models/habito';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: "app-insert-habit",
  templateUrl: "./insert-habit.component.html",
  styleUrls: ["./insert-habit.component.css"]
})
export class InsertHabitComponent implements OnInit {
  myHabit: Habito;

  constructor(private habitService: HabitService, private snack: MatSnackBar) {
    this.myHabit = new Habito();
    this.myHabit.informacion = "";
  }

  ngOnInit() {}
  onURLinserted(){
    
  }
  addNewHabit() {
    if(this.myHabit.informacion != "" && this.myHabit.informacion != null && this.myHabit.imagen != "" && this.myHabit.imagen != null){
      console.log("add habit");
      this.habitService.addHabitService(this.myHabit).subscribe();
      this.snack.open("Sirvió: ","",{duration: 1000});
      this.myHabit = new Habito();
      this.myHabit.informacion = "";
    }
 
  }


  

}
