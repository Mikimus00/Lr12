import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css']
})
export class TableWorkersComponent implements OnInit {

  @Input() title: string;
  @Input() workers: MyWorker[] = [];
  num = 0;
  workerId : number;
  EditName : string;
  EditSurname : string;
  @Output() deleteworker = new EventEmitter<number>();
  @Output() editWorker = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }

    onDeleteWorker(id:number){
      this.deleteworker.emit(id);
    }
    onEditWorker(id:number){

      if (id!=this.workerId){
        this.num = 0;
        this.workerId=id;
        
      }
        if (this.num == 0){
          this.EditName = this.workers[this.workers.findIndex((worker) => worker.id === id)].name 
          this.EditSurname = this.workers[this.workers.findIndex((worker)=> worker.id === id)].surname
          this.num += 1;
        }
       else if(this.num == 1){
          this.editWorker.emit([id,this.EditName,this.EditSurname]);
          this.workerId=null;
          this.EditName=null;
          this.EditSurname=null; 
       }
     }
}
