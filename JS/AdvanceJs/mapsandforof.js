var john = {
    name: 'i am john',
    age: 24,
    isActive: true,

}
var marry ={
    name :'I am marry',
    age :23,
    isActive:true,
}
var sam={
    name: 'I am sam',
    age:29,
    isActive:false,
}

let users = new Map();

users.set('john',john)   //1st attribute is the name given by users
users.set('marry',marry)
users.set('sam',sam)

console.log(users);

// Map {
//     'joh' => { name: 'i am john', age: 24, isActive: true },
//     'marr' => { name: 'I am marry', age: 23, isActive: true },
//     'sa' => { name: 'I am sam', age: 29, isActive: false }
//   }


//console.log(typeof users);

//you can find out how  many objects or entity are there in map but you cant do in object , u need loop to find in object

console.log(users.size);

console.log(users.get('john'))

console.log(users.keys());

console.log(users.values());

console.log();
console.log('for of loop');
console.log();
console.log();
for (const key of users.keys()) {
    
     console.log(key)
}

for (const value of users.values()) {

    console.log(value.name);

}



for (const [key,value] of users.entries()) {

    console.log(key+' = '  + value.name);
}


console.log("For each :-")

users.forEach((value,key)=> console.log(key+' = '+value.name));


var arrofArr=[['one','1'],['two','2'],['three','3'],['four','400']];


var newMap = new Map(arrofArr);
console.log(newMap);
console.log('array');

for(const[key,value] of newMap.entries()){
    console.log(key+ ' ' + value);
}
