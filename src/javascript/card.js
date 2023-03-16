// creates Dom Cards
    // can inherit from the Task prototype
class domCards {
    static allCards = []
    constructor(title, info, tags, date, completed) {
      this.title = title;
      this.info = info;
      this.tags = tags;
      this.date = date;
      this.completed = completed;
    }
}

domCards.prototype.listCards = () => {
    console.log(domCards.allCards);
};

// contains logic for building a single card
export const createTaskCard = (obj) => {};

// iterates through the Task.taskList array and builds a card for each object
const createAll = (array) => {};