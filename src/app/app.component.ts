import { Component } from '@angular/core';
import { timeout } from 'rxjs';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editMode = false;
  taskDate = '';
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
  config: { [key: string]: string } | null = null;
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2024-01-02',
      done: false,
    },
    {
      name: 'Siłownia',
      deadline: '2024-01-02',
      done: true,
    },
    {
      name: 'Siłownia',
      deadline: '2024-01-02',
      done: false,
    },
  ];
  constructor() {


    
  }
}
