function numbers_only(array)
{
    let new_array = [];
    for(var i = 0; i < array.length; i++)
    {
        if(typeof array[i] === 'number')
        {
            new_array.push(array[i]);

        }
    }

    return new_array;
}


let x = numbers_only([2,"car", "cat", 8, -22, true, false])

console.log(x);




function pop_numbers_only(array)
{
    let new_array = [];
    for(var i = 0; i < array.length; i++)
    {
        if(typeof array[i] === 'number')
        {
            array.pop(array[i]);


        }
    }

    return array;
}

let y = pop_numbers_only([2,"car", "cat", 8, -22, true, false])

console.log(y);