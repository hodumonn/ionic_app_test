import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTodoPage } from './new-todo.page';

describe('NewTodoPage', () => {
  let component: NewTodoPage;
  let fixture: ComponentFixture<NewTodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTodoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
