// Card Logic
import {createAll } from "./card.js";
export class Task{
    static taskList = []
    constructor(title, info, tags, date, completed){
        this.title = title;
        this.info = info;
        this.tags = tags;
        this.date = date;
        this.completed = completed;
        Task.taskList.push(this);
    };

    static listAll = () => {
       console.log(Task.taskList) 
    }

}


Task.prototype.listAll()

const card = Object.create(Task)