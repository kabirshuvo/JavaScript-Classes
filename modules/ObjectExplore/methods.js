const student ={
    name: 'Kodma Kuli',
    money: 5000,
    study: 'math',
    subjects: ['calculas', 'algebra', 'geometry'],
    exam: function(){
        return this.name + ' is knocking on the door';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    treatNey: function(ammount){
        this.money = this.money - ammount;
        return this.money;
    }
}


const result = student.exam();
console.log(result);

const lastStatus = student.improveExam('Bangla');
console.log(lastStatus);

const aseKoto = student.treatNey(1000);
console.log(aseKoto);

const afterDola = student.treatNey(500);

console.log(afterDola);