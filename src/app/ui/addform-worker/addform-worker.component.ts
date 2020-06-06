import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {
  
  name: string;
  surname: string;
  type: number = 0;
  myWorkerType = MyWorkerType;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddWorker(){
    let worker: MyWorker = {
      name: this.name,
      surname: this.surname,
      type: this.type
    };
    this.addWorker.emit(worker);
  }

}
