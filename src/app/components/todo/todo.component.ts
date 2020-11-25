import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoForm: FormGroup;
  tasksArray: FormArray;
  titleCtrl: FormControl;

  get todo(): Todo {
    const t: Todo = this.todoForm.value as Todo
    t.tasks = t.tasks.map(v => {
      // @ts-ignore
      v.priority = parseInt(v.priority)
      return v
    })
    return t
  }
  set todo(t: Todo) {
    // leave it
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.todoForm = this.createTodo()
    this.tasksArray = this.todoForm.get('tasks') as FormArray
    this.titleCtrl = this.todoForm.get('title') as FormControl
  }

  private createTask (): FormGroup{
    return this.fb.group({
      description: this.fb.control('', [Validators.required]),
      priority: this.fb.control(0),
    })
  }

  addTask(){
    const task = this.createTask()
    this.tasksArray.push(task)
  }

  deleteTask(idx: number){
    this.tasksArray.removeAt(idx)
  }

  private createTodo (): FormGroup{
    return this.fb.group({
      title: this.fb.control('', [Validators.required]),
      tasks: this.fb.array([])
    })
  }

}
