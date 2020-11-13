import { NavController, ModalController, PopoverController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import todos from '../../data/todos';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.page.html',
  styleUrls: ['./new-todo.page.scss'],
})
export class NewTodoPage implements OnInit {

  todo: {
    id: number,
    title: string,
    description: string,
    complete: boolean
  } = {
    id: todos[todos.length - 1].id + 1,
    title: '',
    description : '',
    complete: false
  };

  constructor(public navCtrl: NavController, 
        private modalCtrl: ModalController,
        public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async showAlert(){
    let alert = await this.alertCtrl.create({
      header: '알림',
      subHeader:'제목이나 내용을 입력하세요.',
      buttons: ['OK']
    });
    return await alert.present();
  }

  saveTodo() {
    if(this.todo.title == '' || this.todo.description == ''){
      this.showAlert();
      return;
    }else{
      todos.push(this.todo);
      this.modalCtrl.dismiss();
    }
  }
  async dismiss() {
    this.modalCtrl.dismiss();
  }

}
