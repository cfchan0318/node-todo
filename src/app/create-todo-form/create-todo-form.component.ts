import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.component.html',
  styleUrls: ['./create-todo-form.component.css']
})
export class CreateTodoFormComponent implements OnInit {

  CreateTodo = new FormGroup({
    todo : new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  createTodo(){
    console.log(this.CreateTodo.value);
  }
}
