import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { DataServService } from './data-serv.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  currentTasks: string[] = ["LOADING"];
  constructor(private cdRef: ChangeDetectorRef,private dataSer:DataServService) { 
    setTimeout(()=>{
      this.currentTasks = this.dataSer.getData();
    },3000)
   
  }
  

  addValue(val:string){
    this.currentTasks = [...this.currentTasks, val];
    this.dataSer.writeUserData(this.currentTasks);
    this.cdRef.detectChanges();
  }

  updateTasks(val:string[]){
    this.currentTasks = val;
  }
}
