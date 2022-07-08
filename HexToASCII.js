const readline = require('readline').createInterface({input: process.stdin,output: process.stdout});
const ASCII = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\[", "\\", "\]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\{", "|", "\}", "~"];
var resultASCII = "";

newFunction();

function newFunction() {
    readline.question(`请输入要转换为ASCII的十六进制数值: `, str => {
        str = str.toUpperCase();
        str = str.replaceAll(" ", ""); // 去除为了美观的空格
        // console.time("newCodeRunTime");
        for (let i = 0; i < str.length; i += 2) {
            let eachTwo = str.substring(i, i + 2);
            eachTwo = Number("0x" + eachTwo);
            if (eachTwo > 31 && eachTwo < 127) {
                resultASCII = resultASCII.concat(ASCII[eachTwo-32]);
            }
            else if (eachTwo == 9) resultASCII += "\t"
            else if (eachTwo == 10) resultASCII += "\n";
            else if (eachTwo == 13) resultASCII += "";
        }
        console.log(resultASCII);
        // console.timeEnd("newCodeRunTime");
        readline.close();
    });
}