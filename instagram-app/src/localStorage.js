export default class Storage {
  constructor(identifier) {
    this.identifier = identifier;
  }

  getAllItems() {
    const items = localStorage.getItem(this.identifier);
    return items === null ? [] : JSON.parse(items);
  }

  add(item) {
    let all = this.getAllItems();
    all.push(item);
    localStorage.setItem(this.identifier, JSON.stringify(all));
  }
  addToSubItem(key, item) {
    let all = this.getAllItems();
    all[key].push(item);
    localStorage.setItem(this.identifier, JSON.stringify(all));
  }

  reset() {
    localStorage.setItem(this.identifier, '[]');
  }

  update(id, payload) {
    let all = this.getAllItems();
    let currentItem = all.find(item => (item.id = id));
    let currentIndex = all.findIndex(item => (item.id = id));
    currentItem = { ...currentItem, ...payload };
    all.splice(currentIndex, 1);
    all.push(currentItem);
    localStorage.setItem(this.identifier, JSON.stringify(all));
  }

  delete(id) {
    let all = this.getAllItems();
    let index = all.findIndex(item => (item.id = id));
    all.splice(index, 1);
    localStorage.setItem(this.identifier, JSON.stringify(all));
  }

  deleteDB() {
    localStorage.removeItem(this.identifier);
  }
}
