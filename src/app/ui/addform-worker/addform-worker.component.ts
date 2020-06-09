import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  formWorker: FormGroup;
  worker: MyWorker;

  @Output() addWorker = new EventEmitter<MyWorker>();
  @Output() confirmWorker = new EventEmitter<MyWorker>();
  constructor() { }

  ngOnInit(): void {
    this.formWorker = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      type: new FormControl({value: 0, disabled: false})
    })
  }

  onAddWorker(){
    this.worker = this.formWorker.value;
    this.worker.phone = '+' + this.worker.phone.slice(0,1) + ' (' + this.worker.phone.slice(1,4) + ') ' + this.worker.phone.slice(4);
    this.addWorker.emit(this.worker);
    console.log(this.worker);
  }

  
}
