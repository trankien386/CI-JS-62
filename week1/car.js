class Car {
	constructor(name, wheel, engine) {
		this.name = name;
		this.wheel = wheel;
		this.engine = engine;
	}

	get getName() {
		return this.name;
	}

	set setName(newName) {
		if (newName.length > 100) {
			this.name = newName;
		}
	}

	run() {
		console.log('Running...');
	}
	
	static beep() {
		console.log('beeppp');
	}
}

// const audi = new Car('Audi', '60cm', '1.5L');
// const nissan = new Car('Nissan', '60cm', '1.5L');
// const mec = new Car('Mec', '60cm', '1.5L');

// console.log(audi);
// console.log(nissan);
// console.log(mec);

// audi.run();

// Tính kế thừa
class Audi extends Car {
	constructor(name, wheel, engine, code) {
		super(name, wheel, engine)
		this.name = name;
		this.wheel = wheel;
		this.engine = engine;
		this.code = code;
	}

	run() {
		// super.run();
		console.log('I\'m driving an Audi');
	}
}

class Toyota extends Car {
	constructor(name, wheel, engine, code) {
		super(name, wheel, engine)
		this.name = name;
		this.wheel = wheel;
		this.engine = engine;
		this.code = code;
	}

	run() {
		console.log('I\'m driving a Toyota');
	}
}

// Tính đóq gói
const glc300 = new Audi('GLC 300', '65cm', '2.5L', 'glc-300');
const vios = new Toyota('Toyota Vios', '65cm', '2.5L', 'glc-300');

// console.log(glc300);
// glc300.setName = 'GLC-300';
// console.log(glc300.getName);
Audi.beep();
Toyota.beep();

// Tính đa hình
glc300.run();
vios.run();

