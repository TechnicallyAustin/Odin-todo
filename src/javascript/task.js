// Card Logic
import { createTaskCard } from "./card.js";
class Task{
    static taskList = []
    constructor(title, info, tags, date, completed){
        this.title = title;
        this.info = info;
        this.tags = tags;
        this.date = date;
        this.completed = completed;
        Task.taskList.push(this);
    };

}

Task.prototype.listAll = () => {
   console.log(Task.taskList) 
}

Task.prototype.listAll()