import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter()
  
  text: string | any;
  day: string | any;
  reminder: boolean = false;
  showAddTask: boolean | any;
  subscription: Subscription | any;
  
  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value)
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text || !this.day) {
      alert('Please add all the needed informations');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask)

    this.text = '',
    this.day = '',
    this.reminder = false


  }

}
