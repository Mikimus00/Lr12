import { Component, OnInit } from '@angular/core';
import { MyWorker, MyWorkersDatabase, MyWorkerType } from './shared/worker.model';
import { isNullOrUndefined } from 'util';
import { HttpWorkerService } from './shared/services/http-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;

  constructor(private httpWorkerService: HttpWorkerService){}
  ngOnInit(){
    this.getData();
  }
  async getData(){
    try {
      this.workers = await this.httpWorkerService.getWorkers();
      
    } catch (error) {
      console.log(error);
    }
  }

  getByType(type: number){
    return this.workers.filter(worker => worker.type === type);
  }

  async onDeleteWorker(id: number){
    try {
      await this.httpWorkerService.deleteWorker(id);
      this.getData();
    } catch (error) {
      console.log(error);
    } 
  }


  async onAddWorker(worker: MyWorker){
    try {
      let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 :  0;
      worker.id = id;
      await this.httpWorkerService.postWorkers(worker);
    } catch (error) {
      console.log(error);
    } finally{
      this.getData();
    }
  }
  async onEditWorker(worker){
    console.log(worker);
    try {
      if (this.workers[worker.id-1].phone != worker.phone)
      this.workers[worker.id-1].phone=worker.phone = '+' + worker.phone.slice(0,1) + ' (' + worker.phone.slice(1,4) + ') ' + worker.phone.slice(4);
      await this.httpWorkerService.editWorker(worker);
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }
}
