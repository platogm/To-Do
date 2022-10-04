import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import {
  trigger, state, style, animate, transition, query, group, animation
 } from '@angular/animations';
 
 interface obj {todo:string;state:boolean}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  animations: [trigger('fade',[])]
})
export class TasksComponent implements OnInit {
  @Input() currentTasks:string[] = [];
  @Output() updateEvent = new EventEmitter<string[]>();
  selected:string[] = [];
  h:string="";
  maxheigh:number = 5;

  constructor() { 
    console.log("this is height: ",this.currentTasks.length)
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.adjustHeight();
    },100);
    this.adjustHeight();
  }
  isDisabled: boolean = false;
  displaydata(){
    console.log(this.currentTasks)
  }  

  adjustHeight(){
    if(this.currentTasks.length<5){
      this.h = String(60*this.currentTasks.length).concat("px");
    }else{
      this.h = "250px"
    }
  }

  manageTodo(val:obj){
    if (val.state == false){
      this.selected = this.selected.filter((a, index) => index !== this.selected.indexOf(val.todo));
    }else{
      this.selected.push(val.todo);
    }
    console.log(this.h);
  }
  removeData(){
    for(let x of this.selected){
      this.currentTasks = this.currentTasks.filter((a, index) => index !== this.currentTasks.indexOf(x));
    }
    this.adjustHeight();
    this.selected = [];
    this.updateEvent.emit(this.currentTasks);
  }

}
