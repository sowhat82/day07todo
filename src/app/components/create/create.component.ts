import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid'
import { Router } from '@angular/router';
import { TodoComponent } from '../todo/todo.component';
import { TodoDatabase } from 'src/app/todo.database';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class createComponent implements OnInit {

  todoForm: FormGroup
  tasksArray: FormArray
  titleCtrl: FormControl

  @ViewChild('myTodo')
  todoRef: TodoComponent



  constructor(private fb: FormBuilder, private router: Router, private todoDB: TodoDatabase) { }

  ngOnInit(): void {

  }

  async addTodo() {
       // Generate a new id for todo
       const id = uuidv4().toString().substring(0, 8)
       // Get the new todo from the form
       const todo = this.todoRef.todo;
       // set the new id to the new todo
       todo.taskID = id;
   
       // Save this to the database
       await this.todoDB.addTodo(todo)
   
       // navigate to /
       this.router.navigate(['/'])
     }

}
