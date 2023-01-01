class parent {
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}

class child extends parent {
    constructor(name){
        super();
    this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const result =new child("Sojib");
console.log(result.getFullName());
const result2 = new child("Rakb");
console.log(result2);