class employee {
  constructor(id, name, age, gender, address) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
  }

  get getId() {
    return this.id;
  }

  set setId(newId) {
    this.id = newId;
  }

  checkTimekeeping() {
    console.log('Nhan vien cham cong');
  }

  checkWorkingDay() {
    console.log('Day la ngay di lam');
  }
}

export default employee;