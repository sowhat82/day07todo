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

  constructor(private todoDB: TodoDatabase, private router: Router) { }

  result = []

  async ngOnInit(): Promise<void> {
    this.result = await this.todoDB.getTodoSummary()

    console.info(this.result)
  }

  gotoDetail(id: string){
    console.info (id)
    this.router.navigate(['/todo', id]);
  }

}
