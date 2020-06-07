import { Component } from '@angular/core';
import { MyWorker, MyWorkersDatabase, MyWorkerType } from './shared/worker.model';

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
    if(worker.name != null && worker.surname != null){
    let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 :  0;
    worker.id = id;
    this.workers.push(worker);
    }
    else alert("Пустые поля имени и фамилии");
  }
  onEditWorker(worker){
    if (worker[1]!=undefined && worker[1]!="") this.workers[worker[0]-1].name=worker[1];
    if (worker[2]!=undefined && worker[2]!="") this.workers[worker[0]-1].surname=worker[2];
  }
}
