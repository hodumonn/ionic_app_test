import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import todos from '../../data/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  todo: {
    id: number,
    title: string,
    description: string,
    complete: boolean
  };

  constructor(private route: ActivatedRoute, public navCtrl: NavController) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.todo = Object.assign({}, this.getTodo(id));
  }

  getTodo(todoId) {
    for(let todo of todos){
      if(todo.id == todoId) return todo;
    }

    return undefined;
  }

  uploadTodo(){
    todos[this.todo.id - 1 ] = this.todo;
    this.navCtrl.navigateRoot('/');
  }

}
