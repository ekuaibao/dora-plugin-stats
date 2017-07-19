dora-plugin-stats
=========

## 这个是干啥的？

我们在使用dora开发的时候经常使用多种插件，如livereload、webpack等。在webpack编译出错时，多个插件都将错误信息打印出来，
造成大量日志重复，难以找到关键出错的地方。

这个插件的作用是将其他插件的错误信息都沉默掉，只打印一次错误信息。

## 使用方法

将此插件放在dora插件列表的最后一个。在webpack配置对象上加一个stats属性，该属性用于格式化错误信息。
举个例子：

webpack.config.js
```
module.exports = {
  stats: {
    colors: true,
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: false,
    cached: false,
    reasons: false,
    source: false,
    errorDetails: true,
    chunkOrigins: false
  },
  // ... 其他选项
}
```

参考：`https://webpack.js.org/configuration/stats/#stats`

License
-------

(The MIT License)

Copyright (c) 2017 ekuaibao https://www.ekuaibao.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
