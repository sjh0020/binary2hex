const ascii = require('./ascii.json');
const readline = require('readline').createInterface({input: process.stdin,output: process.stdout});
var resultASCII = "";

legacy();

function legacy() {
    readline.question(`请输入要转换为ASCII的十六进制数值: `, str => {
        str = str.toUpperCase();
        // console.time("legacyCodeRunTime");
        for (let i = 0; i < str.length; i += 2) {
            let eachTwo = str.substring(i, i + 2);
            if (eachTwo == "0A") resultASCII += "\n";
            else if (eachTwo == "0D") resultASCII += "";
            else if (eachTwo == "09") resultASCII += "\t";
            else resultASCII = resultASCII.concat(ascii[eachTwo]);
        }
        console.log("ASCII为:\n" + resultASCII);
        // console.timeEnd("legacyCodeRunTime");
        readline.close();
    });
}