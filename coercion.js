let a = 7;
let b= '6';
b = parseInt(b,10);

let c = a + b;

console.log('answer: '+ c);


/*let counter = 0;
function timeout()
{
    setTimeout(function()
        {
            console.log('hi' + counter++);
            timeout();

        },2000);
}

timeout();*/

(function (){
    console.log('immediately invoked function expression')
})();