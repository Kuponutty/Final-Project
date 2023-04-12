"use strict";

function main()
{
    var hours = [2, 4, 9, 7, 8];
    var num = 0;

    for (var i = 0; i < hours.length; i++)
    {
        if (hours[i] > num)
        {
            num = hours[i];
        }
    }
    
    
    console.log(num);
}
if (require.main === module){
    main();
}