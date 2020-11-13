import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';


import todos from '../../data/todos';
import { NewTodoPage } from '../new-todo/new-todo.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  todos: {
    id: number,
    title: string,
    description: string,
    complete: boolean
  }[];

  constructor(public navCtrl: NavController, private modelCtrl: ModalController) {}

  //로딩이 될때 가장 먼저 호출되는 angular 함수
  ngOnInit(){
    this.todos = todos;

  }

  //페이지 이동
  openTodo(todoId) {
    this.navCtrl.navigateForward('todo/'+todoId);
  }

  async openNewTodo() {
    
    let modal = await this.modelCtrl.create({ component: NewTodoPage });
    return await modal.present();
  }

  deleteTodo(todoId) {
    todos.splice(todoId-1, 1);
  }

}
