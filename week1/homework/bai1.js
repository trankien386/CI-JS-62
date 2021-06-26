class employee {
  constructor(name, age, gender, address, hourStart, hourEnd, minuteStart, minuteEnd, workday) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.hourStart = hourStart;
    this.hourEnd = hourEnd;
    this.minuteStart = minuteStart;
    this.minuteEnd = minuteEnd;
    this.workday = workday;
  }

  checkTimekeeping(hour, minute) {
    if (hour == this.hourEnd && minute == this.minuteEnd|| hour == this.hourStart && minute == this.minuteStart) {
      console.log('success');
    } else {
      console.log('fail');
    }
  }

  checkWorkingDay() {
    if (this.workday == 7) {
      console.log('Di lam vao tat ca cac ngay trong tuan');
    } else if (this.workday == 5) {
      console.log('Di lam tu thu 2 den thu 6');
    } else {
      console.log('Di lam tu thu 2 den thu 7');
    }
  }
}


class worker extends employee {
  constructor(name, age, gender, address, hourStart, hourEnd, minuteStart, minuteEnd, workday, level) {
    super(name, age, gender, address, hourStart, hourEnd, workday)
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.address = address;
      this.hourStart = hourStart;
      this.hourEnd = hourEnd;
      this.minuteStart = minuteStart;
      this.minuteEnd = minuteEnd;
      this.workday = workday;
      this.level = level;
  }
}

const worker1 = new worker('worker1', 18, 'male', 'Hanoi', 22, 6, 0, 0, 7);
worker1.checkTimekeeping(22, 0);
worker1.checkWorkingDay();

class engineer extends employee {
  constructor(name, age, gender, address, hourStart, hourEnd, minuteStart, minuteEnd, workday, branch) {
    super(name, age, gender, address, hourStart, hourEnd, workday)
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.address = address;
      this.hourStart = hourStart;
      this.hourEnd = hourEnd;
      this.minuteStart = minuteStart;
      this.minuteEnd = minuteEnd;
      this.workday = workday;
      this.branch = branch;
  }
}

const engineer1 = new engineer('engineer1', 18, 'male', 'Hanoi', 9, 18, 0, 0, 5);
engineer1.checkTimekeeping(10, 0);
engineer1.checkWorkingDay();

class staff extends employee {
  constructor(name, age, gender, address, hourStart, hourEnd, minuteStart, minuteEnd, workday, task) {
    super(name, age, gender, address, hourStart, hourEnd, workday)
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.address = address;
      this.hourStart = hourStart;
      this.hourEnd = hourEnd;
      this.minuteStart = minuteStart;
      this.minuteEnd = minuteEnd;
      this.workday = workday;
      this.task = task;
  }
}

const staff1 = new staff('staff1', 18, 'male', 'Hanoi', 8, 17, 30, 30, 6);
staff1.checkTimekeeping(8, 30);
staff1.checkWorkingDay();