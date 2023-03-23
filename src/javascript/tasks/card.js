import { Task } from "./task.js";
// creates Dom Cards
    // can inherit from the Task prototype
class Card extends Task {
    static allCards = []
    constructor(title, info, tags, date, completed, color) {
        super(title, info, tags, date, completed)
        this.color = color
    }
      
    static listCards = () => {
        console.log(Card.allCards);
    };
}

// contains logic for building a single card
const newTaskCard = (obj) => {};

// iterates through the Task.taskList array and builds a card for each object
export const createAll = (array) => {};
