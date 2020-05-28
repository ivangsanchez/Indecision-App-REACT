class Person {
    constructor(name = 'Anonymous', age=0){
        this.name = name;
        this.age = age;
    }
    getGretting() {
        //return 'Hi!: '+this.name;
        return `Hi. I am ${this.name}`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, mayor) {
        super(name,age);
        this.mayor = mayor;
    }
    hasMayor() {
        return !!this.mayor;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMayor()){
            description += ` Their major is ${this.mayor}`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor (name, homeLocation){
        super(name);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGretting(){
        let gretting = super.getGretting();
        if(this.hasHomeLocation()){
            gretting += ` I´m visiting from ${this.homeLocation}.`
        }
        return gretting;
    }
}

const me = new Traveler('Ivan Sanchez','Mexico');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());