# react-affixed

[live-demo](https://importcjj.github.io/react-affix/)

#### Install

`npm install react-affixed`

#### Usage

```js
import React, { Component } from 'react';
import Affix from 'react-affixed';

const Demo = props => {
    return (
        <div>
            <Affix offsetTop={0}>
                <h1>hello, react-affixed</h1>
            </Affix>
        </div>
    )
}
```

#### props  可控属性

###### horizontal
bool   被固定时是否可以左右滑动 default: true
###### offsetTop
number 固定触发距离 default: 0
###### onChange
func   触发固定或者固定取消时的回调函数  default: function(){}
###### container
react element  固定元素所属容器  default: document.body
