import staff from './model/entities/staff.js';

const staff1 = new staff(123, 'staff 1', 20, 'Male', 'Hanoi', 'Teaching')
console.log(staff1);

staff1.checkTimekeeping();
staff1.checkWorkingDay();