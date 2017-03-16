# react-affix

[live-demo](https://importcjj.github.io/react-affix/)

#### Install

`npm install react-affixed`

#### Usage

```js

import Affix from 'react-affixed';

const Demo = props => {
    return (
        <div>
            <Affix offsetTop={0}><h1>hello</h1></Affix>
        </div>
    )
}
```

#### props

- horizontal bool
- offsetTop  number
- onChange   func
- container  react element
