class Media {
  constructor(title){
    this._title = title; 
    this._isCheckedOut = false; 
    this._ratings = []; 
  }

  get title(){
    return this._title;
  }

  get isCheckedOut(){
    return this._isCheckedOut; 
  }

  get ratings(){
    return this._ratings; 
  }

  set isCheckedOut(checkedOut){
    this._isCheckedOut = checkedOut; 
  }

  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut; 
  }

  getAverageRating(){
     if (this._ratings.length === 0) return 0;
     const ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);

     return ratingsSum / this._ratings.length;
  }

  addRating(newRating){
    this._ratings.push(newRating);
  }
}

class Book extends Media{
  constructor(title, author, pages){
    super(title);
    this._author = author; 
    this._pages = pages; 
  }

  get author(){
    return this._author; 
  }

  get pages(){
    return this._pages; 
  }
}

class Movie extends Media{
  constructor(title, director, runTime){
    super(title);
    this._director = director; 
    this._runTime = runTime; 
  }

  get director(){
    return this._director; 
  }

  get runTime(){
    return this._runTime; 
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus(); 
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating()); 



const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating()); 



