class User{
   constructor(firstname,lastname,credits){
        this.firstname=firstname;
        this.lastname=lastname;
        this.credits=credits;
   }
   getFullName(){
    return (`${this.firstname} ${this.lastname} is my fullname`);
   }


   editName(newname){
      const myname = newname.split(' ');
      this.firstname=myname[0];
      this.lastname = myname[1];
   }
}

class Teacher extends User{
   constructor(firstname,lastname,credits,subject){
      super(firstname,lastname,credits);
      this.subject=subject;  
   }

   getFullName(){
      return (`${this.firstname} ${this.lastname} is my fullname and i teach  ${this.subject}`);
   }

   favDrink(name){
      console.log('my fav drink is '+name)
   }

}

const john = new Teacher('john','anderson',34,'python');
console.log(john);
console.log(john.getFullName());
john.editName('johnny anderson');

console.log(john.getFullName());

john.favDrink('icetea')
