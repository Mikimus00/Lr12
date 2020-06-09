export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    phone: string;
    id?: number;
}

export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager
}

export let MyWorkersDatabase: MyWorker[] = [
    {id: 1, name: "Иван", surname: "Иванов", type:0, phone: '+7 (916) 9510824'},
    {id: 2, name: "Петр", surname: "Петров", type:1, phone: '+7 (937) 4824610'},
    {id: 3, name: "Сидор", surname: "Сидоров", type:2, phone: '+7 (925) 6487349'},
    {id: 4, name: "Василий", surname: "Васильев", type:3, phone: '+7 (910) 2486422'}
]