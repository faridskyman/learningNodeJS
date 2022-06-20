//add readline module
const readline =  require('readline');

console.log("hi from nodeDemo POW")


function do_pow(inputNo)
{
    for(var i=0;i<inputNo;i++)
    {
        var pow_val = Math.pow(i,2)

        console.log(`Calc ${i} ^ 2 = ${pow_val}`);
    }
}

const intfc = readline.createInterface({input: process.stdin, output: process.stdout});
intfc.question("Pow to which number?", function(answer){
    do_pow(answer);
    intfc.close();
    process.stdin.destroy();
});