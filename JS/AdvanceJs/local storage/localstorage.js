localStorage.setItem('hero','thor');
localStorage.setItem('todo','buy ice tea');
var myhero=localStorage.getItem('hero');
console.log(myhero); 
console.log(localStorage.getItem('todo'));

localStorage.setItem('todo','record video')
console.log(localStorage.getItem('todo'));
localStorage.removeItem('hero')
console.log(localStorage.getItem('hero'));