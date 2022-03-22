let userEmail = 'LCo123s'
let password = '123458421'

// console.log (password.length);
// 'console.log(userEmail.toLowerCase());
// console.log(userEmail.toUpperCase());

let userChecker = function(mystring){
    if((mystring.includes(123))&&(mystring.length>6)){
        return true;
    }else{
        return false;
    }
}

console.log(userChecker(userEmail));



let passchecker = function(pass){
    if((pass.includes(1234)) &&(pass.length>8)){
        return true;
    }else{
        return false;
    }
}

console.log(passchecker(password));
