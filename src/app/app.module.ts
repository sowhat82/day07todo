import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoDatabase } from './todo.database';
import { TodoComponent } from './components/todo/todo.component';
import { createComponent } from './components/create/create.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';

const appRoutes: Routes = [
  //  { path: '', component: HomeComponent },
    { path: '', component: MainComponent },
    { path: 'create', component: createComponent },
    { path: 'todo/:todoId', component: TodoDetailComponent },
    { path: "**", redirectTo: '/', pathMatch: 'full' },
    ];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TodoComponent,
    createComponent,
    TodoDetailComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule, ReactiveFormsModule,
  ],
  providers: [TodoDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
