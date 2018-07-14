
//0 -> James
/* let array = [ "James", "Jill", "Jane", "Jack" ];


for(var i = 0; i < array.length; i++)
{
    console.log(i + ' -> ' + array[i]);
} */





function fancy_array(array, symbol, reverse)
{
   
            if(reverse == true)
                { 
                for(var i = 0; i < array.length; i++)
                    {
                        //console.log('${i} ${symbol} ${array[i]}')
                        console.log(`${i} ${symbol} ${array[i]}`)
                    }
                }
            else
            {
                for(var i = array.length-1; i > -1; i--)
                {
                    console.log(i + ' ' + symbol + ' ' + array[i]); 
                    //console.log("${i} ${symbol} ${array[i]}");
                }
            }
           
}



fancy_array([ "James", "Jill", "Jane", "Jack" , "Larry"], '-------->', false)