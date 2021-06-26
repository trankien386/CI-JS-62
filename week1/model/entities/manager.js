import book from './employee.js';
import magazine from './employee.js';
import newspaper from './employee.js';

class manager {
  constructor(listBook, listMagazine, listNewspaper) {
    this.listBook = listBook;
    this.listMagazine = listMagazine;
    this.listNewspaper = listNewspaper;
  }

  /**
   * Add new document by type
   * @param {*} doc Book - Magazine - Newspaper
   * @param {*} type : type of doc
   */
  addDocument(doc, type) {
    if (type === 'book') {
      this.listBook.push(doc);
    } else if (type === 'magazine') {
      this.listMagazine.push(doc);
    } else {
      this.listNewspaper.push(doc);
    }
  }

  /**
   * Add new document by type
   * @param {*} doc Book - Magazine - Newspaper
   */
  addDocumentWithoutType(doc) {
    if (doc instanceof book) {
      this.listBook.push(doc);
    } else if (doc instanceof magazine) {
      this.listMagazine.push(doc);
    } else {
      this.listNewspaper.push(doc);
    }
  }
}

export default manager;