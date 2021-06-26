class manager {
  constructor(code, publisher, numberOfCopies) {
    this.code = code;
    this.publisher = publisher;
    this.numberOfCopies = numberOfCopies;
  }

}

class book extends manager {
  constructor(code, publisher, numberOfCopies, author, page) {
    super(code, publisher, numberOfCopies)
    this.code = code;
    this.publisher = publisher;
    this.numberOfCopies = numberOfCopies;
    this.author = author;
    this.page = page;
  }
}

class magazine extends manager {
  constructor(code, publisher, numberOfCopies, issue, month) {
    super(code, publisher, numberOfCopies)
    this.code = code;
    this.publisher = publisher;
    this.numberOfCopies = numberOfCopies;
    this.issue = issue;
    this.month = month;
  }
}

class newspaper extends manager {
  constructor(code, publisher, numberOfCopies, day) {
    super(code, publisher, numberOfCopies)
    this.code = code;
    this.publisher = publisher;
    this.numberOfCopies = numberOfCopies;
    this.day = day; 
  }
}