import { Component,OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() newToDoEvent = new EventEmitter<string>();
  name: string="";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: {name: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
      console.log("before if")
      if(this.name){
        console.log("after if",this.name)
        this.newToDoEvent.emit(this.name);
      }
    });
  }

  ngOnInit(): void {
  }

}
