import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/model';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todoId: string
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.todoId = this.activatedRoute.snapshot.params['todoId']
  }

}
