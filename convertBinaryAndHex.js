const binary = ['0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'];
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const ASCII = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\[", "\\", "\]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\{", "|", "\}", "~"];
const readline = require('readline').createInterface({input: process.stdin,output: process.stdout});
var result = "";
var resultASCII = "";

readline.question('从二进制转换为十六进制请输入1, 反之输入2: ', num => {
    if (num == 1) convert1();
    else if (num == 2) convert2();
})


function convert1() {
    readline.question(`请输入要转换的二进制数值: `, str => {
        binaryToHex(str);
        hexToASCII(result);
        console.log('十六进制数值为:\n' + result);
        console.log("ASCII为:\n" + resultASCII);
        readline.close();
    });
}

function convert2() {
    readline.question(`请输入要转换的十六进制数值: `, str => {
        hexToBinary(str);
        hexToASCII(str);
        console.log('二进制数值为:\n' + result);
        console.log("ASCII为:\n" + resultASCII);
        readline.close();
    });
}

function binaryToHex(str) {
    while (str.length%4 != 0) str = "0" + str;
    for (let i = 0; i < str.length; i += 4) {
        let strIn4 = str.substring(i, i + 4);
        for (let n = 0; n <= 15; n++) {
            if (strIn4 == binary[n]) {
                strHex = hex[n];
            }
        }
        result = result.concat(strHex);
    }
}

function hexToBinary(str) {
    console.time('codeRunTime');
    str = str.toUpperCase();
    for (let i = 0; i < str.length; i++) {
        for (let n =0; n <= 15; n++) {
            if (str[i] == hex[n]) {
                strBinary = binary[n];
        }}
        result = result.concat(strBinary);
    }
    console.timeEnd("codeRunTime");
}

function hexToASCII(str) {
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
}