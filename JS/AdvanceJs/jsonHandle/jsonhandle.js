const student = {
    name : 'ravi',
    age:23,
    toactive : true
}


const studentObjToString = JSON.stringify(student);
console.log(typeof studentObjToString);

//localStorage.setItem('student',studentToObject);

const toJsonstudent = JSON.parse(studentObjToString)
console.log(typeof toJsonstudent);

console.log(toJsonstudent.age)