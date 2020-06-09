import { Component } from '@angular/core';
import { MyWorker, MyWorkersDatabase, MyWorkerType } from './shared/worker.model';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;

  getByType(type: number){
    return this.workers.filter(worker => worker.type === type);
  }
  onDeleteWorker(id: number){
    let index = this.workers.findIndex(worker => worker.id === id);
    if(index != -1)this.workers.splice(index, 1);
  }
  onAddWorker(worker: MyWorker){ 
    let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 :  0;
    worker.id = id;
    this.workers.push(worker);
  }
  onEditWorker(worker){
    console.log(worker);
    if (worker.name != isNullOrUndefined) this.workers[worker.id-1].name=worker.name;
    if (worker.surname != isNullOrUndefined) this.workers[worker.id-1].surname=worker.surname;
    if (worker.phone != isNullOrUndefined) this.workers[worker.id-1].phone=worker.phone;
  }
}
