# native-echarts

[![NPM Version](https://img.shields.io/npm/v/native-echarts.svg?style=flat)](https://www.npmjs.org/package/native-echarts)
  [![npm](https://img.shields.io/npm/dm/native-echarts.svg?style=flat)](https://www.npmjs.org/package/native-echarts)
  [![License](http://img.shields.io/npm/l/native-echarts.svg?style=flat)](https://raw.githubusercontent.com/somonus/react-native-echarts/master/LICENSE.md)

## Yarn安装

```
$ yarn add native-echarts
```

## 使用

使用方法和 Echarts 完全一致

### props

- *option* (object): The option for echarts: [Documentation](http://echarts.baidu.com/option.html#title)。 
- *width* (number): 图表的宽度，默认值是它外部容器的宽度。
- *height* (number): 图表的高度，默认值是400。

### Demo

```js
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Echarts from 'native-echarts';

export default class app extends Component {
  render() {
    const option = {
      title: {
          text: 'ECharts demo'
      },
      tooltip: {},
      legend: {
          data:['销量']
      },
      xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
    };
    return (
      <Echarts option={option} height={300} />
    );
  }
}

AppRegistry.registerComponent('app', () => app);
```

## 示例

*run demo*

```
cd example
yarn install
npm start
```

### IOS

Open the xcode project in the ios directory and click run

screenshots：

![image](https://github.com/somonus/react-native-echarts/blob/master/example/demoIOS.png)

### Android

Open the Android project in the android directory with Android Studio and click run.

screenshots：

![image](https://github.com/somonus/react-native-echarts/blob/master/example/demoAndroid.png)

## License

native-echarts is released under the MIT license.
