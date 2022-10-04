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
  constructor(private cdRef: ChangeDetectorRef,private dataSer:DataServService) { }
  currentTasks: string[] = this.dataSer.getData();

  addValue(val:string){
    this.currentTasks = [...this.currentTasks, val];
  
    this.cdRef.detectChanges();
  }

  updateTasks(val:string[]){
    this.currentTasks = val;
  }
}
