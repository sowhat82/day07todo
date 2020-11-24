import { Injectable } from '@angular/core';
import Dexie from "dexie";
import {Todo, TodoSummary} from './model';

@Injectable()

export class TodoDatabase extends Dexie{

    private todo: Dexie.Table<Todo>;

    constructor(){
        //database name
        super ('tododb')

        //set up the schema for v1
        this.version(1).stores({
            todo: "id"
        })

        // get a reference to the todo collection
        this.todo = this.table('todo')
    }

    async addTodo (t: Todo): Promise<any>{
        return await this.todo.put(t)
    }

    async getTodoSummary (): Promise<TodoSummary[]>{
        return (await this.todo.toArray())
            .map (d => {
                return {
                    id: d.taskID,
                    title: d.title
                } as unknown as TodoSummary
            })
    }
}
