import employee from "./employee.js";

class staff extends employee {
  constructor(id, name, age, gender, address, task) {
    super(id, name, age, gender, address);
    this.task = task;
  }

  get getTask() {
    return this.task;
  }

  set setTask(newTask) {
    this.task = newTask;
  }

  /**
   * Cham cong
   * @returns boolen - true, false
   */
  checkTimekeeping() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    if (
      (hour === 22 || hour === 6 ) ||
      (hour === 9 || hour === 18) ||
      (hour === 8 && minute <= 30) ||
      (hour === 17 && minute >= 30)
    ) {
      super.checkTimekeeping();
      return true;
    }
    console.log('Ngoai gio cham cong!');
    return false;
  }

  // override
  checkWorkingDay() {
    const dateInWeek = new Date().getDay();
    if (dateInWeek >= 1 && dateInWeek <= 6) {
      console.log('Nhan vien di lam tu 2 -> 7');
      return;
    }

    console.log('Cuoi tuan vui ve');
    return;
  }
}

export default staff;