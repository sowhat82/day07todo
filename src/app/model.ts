import { FormGroup } from '@angular/forms';

export enum Priority {
    Low = 0, Medium, High
}
export interface task{
    description: string;
    priority: Priority
}

export interface Todo{
    taskID: string;
    title: string;
    tasks: task[],
}

export interface TodoSummary{
    taskID: string;
    title: string;
}