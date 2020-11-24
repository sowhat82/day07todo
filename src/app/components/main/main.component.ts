import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDatabase } from 'src/app/todo.database';
import {v4 as uuidv4} from 'uuid'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  router: Router
  constructor(private todoDB: TodoDatabase) { }

  async ngOnInit(): Promise<void> {
    const result = this.todoDB.getTodoSummary()
  }

  async addTodo(){
    const id = uuidv4().toString().substring(0,8)
    // const todo = this.todoRef.todo;
    // set the new id to the new todo
    // todo.id = id;

    // save this to the database
    // await this.todoDb.addTodo(todo)

    // navigate to /
    this.router.navigate(['/'])
  }


}
