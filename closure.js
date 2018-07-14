function sayHello(name){
    return function(){
        console.log('howdy' + name);
    }
}

let deli = sayHello('Delilah');

console.log(deli);
deli();