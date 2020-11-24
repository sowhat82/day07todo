import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class createComponent implements OnInit {

  todoForm: FormGroup
  tasksArray: FormArray
  titleCtrl: FormControl

  get todo(): Todo{
    return this.todoForm.value as Todo
  }

  set todo(t: Todo){
    
  }

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.todoForm = this.createTodo()
    this.tasksArray = this.todoForm.get('tasks') as FormArray
  }

  private createTodo (): FormGroup{
    return this.fb.group({
      title: this.fb.control('', [Validators.required]),
      tasks: this.fb.array([])
    })
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

  async addTodo(){
        // Generate a new id for todo
        const id = uuidv4().toString().substring(0, 8)
        // Get the new todo from the form
        const todo = this.todoRef.todo;
        // set the new id to the new todo
        todo.id = id;
    
        // Save this to the database
        await this.todoDB.addTodo(todo)
    
        // navigate to /
        this.router.navigate(['/'])
  }

}
