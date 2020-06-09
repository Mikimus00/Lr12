import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyWorker } from '../worker.model';

@Injectable({
  providedIn: 'root'
})
export class HttpWorkerService {
  routeApi="http://localhost:3000/workers"
  constructor(private http:HttpClient) { }

  getWorkers(): Promise<any>{
    return this.http.get(this.routeApi).toPromise();
  }

  postWorkers(data: MyWorker){
    return this.http.post(this.routeApi,data).toPromise();
  }
  deleteWorker(id: number){
    const api = `${this.routeApi}/${id}`;
    return this.http.delete(api).toPromise();
  }
  editWorker(worker: MyWorker){
    console.log(worker);
    const api = `${this.routeApi}/${worker.id}`;
    console.log(api);
    return this.http.put(api, worker).toPromise();
    
  }
}