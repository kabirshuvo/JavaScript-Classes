const student ={
    name: 'Kodma Kuli',
    money: 5000,
    study: 'math',
    subjects: ['calculas', 'algebra', 'geometry'],
    exam: function(){
        console.log(this.name, 'is knocking on the door');
    }
}
student.exam();