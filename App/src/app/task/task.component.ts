import { Component, Input,OnInit, Output,EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

interface obj {todo:string;state:boolean}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy, OnChanges{
  val:obj={todo:"",state:false};
  @Input() task:string = "";
  @Input() selectedTasks:string[] = [];
  @Output() handleEve = new EventEmitter<obj>();
  isSelected = false;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.selectedTasks.indexOf(this.task)==-1){
      this.isSelected = false;
      this.value = 1;
    }else{
      this.isSelected = true;
      this.value = 0.4;
    }
    console.log("Getting changed ",this.task)
  }
  ngOnDestroy(): void {
    console.log("Getting destroyed ",this.task)
  }

  ngOnInit(): void {
    console.log(this.isSelected ,this.task)
  }
  value:number = 1;
  clicked(){
    this.value = this.value==0.4 ? 1 : 0.4;
    this.isSelected = !this.isSelected;
    this.val = {todo:this.task,state:this.isSelected};
    this.handleEve.emit(this.val);
  }
}
