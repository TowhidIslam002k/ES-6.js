class student{
    constructor(sId, sName, sClass){
        this.id = sId;
        this.name = sName;
        this.school = "International School"
        this.Class = sClass;
    }
}

const student1 = new student(1, "Soikot", 10);
const student2 = new student(2, "Akash", 10);
console.log(student1, student2);