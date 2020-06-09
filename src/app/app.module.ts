import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import {HttpClientModule} from '@angular/common/http'
 
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { FilterPipe } from './shared/pipes/filter.pipe';


@NgModule({
  declarations: [ AppComponent, TableWorkersComponent, AddformWorkerComponent, FilterPipe],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
