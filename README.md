# binary2hex

![Node.js](https://img.shields.io/badge/Node.js->=7-brightgreen?style=plastic&logo=nodedotjs)    ![JS](https://img.shields.io/badge/JavaScript-ES6-yellow?style=plastic&logo=javascript)    ![License](https://img.shields.io/badge/License-WTFPL-blue)

# About

这是一个没有什么用的进制转换脚本，可以在二进制和十六进制间相互转换，附带转为ASCII编码的功能。弱化版的十六进制编辑器。

### 实现

暴力穷举。
两种版本，一种是`for`遍历数组，另一种是`indexOf()`搜索数组。实测使用`indexOf()`会比单纯`for`效率低。

# Use


    # node convertBinaryAndHex.js