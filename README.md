# youngjuning-native-echarts

[![NPM Version](https://img.shields.io/npm/v/youngjuning-native-echarts.svg?style=flat)](https://www.npmjs.org/package/youngjuning-native-echarts) [![npm](https://img.shields.io/npm/dm/youngjuning-native-echarts.svg?style=flat)](https://www.npmjs.org/package/youngjuning-native-echarts) [![License](http://img.shields.io/npm/l/native-echarts.svg?style=flat)](https://raw.githubusercontent.com/youngjuning/youngjuning-native-echarts/master/LICENSE.md)

## Yarn安装

```
$ yarn add youngjuning-native-echarts
```

## Android 打包

在项目根目录文件夹下使用命令：

打包 Android 需要先把 [tpl.html](http://t.cn/RBHgzv0) 下载下来拷贝到 `app/src/main/assets` 目录中。

- 以下是 mac && linux

```bash
mkdir android/app/src/main/assets/ && cp node_modules/youngjuning-native-echarts/src/components/Echarts/tpl.html android/app/src/main/assets/
```
- 以下是 windows

```bash
md android/app/src/main/assets/ && copy node_modules/youngjuning-native-echarts/src/components/Echarts/tpl.html android/app/src/main/assets/
```

## 使用

使用方法和 Echarts 完全一致

### props

- **option** (object): The option for echarts: [Documentation](http://echarts.baidu.com/option.html#title)。
- **width** (number): 图表的宽度，默认值是它外部容器的宽度。
- **height** (number): 图表的高度，默认值是400。

### 实例方法

| 方法名称  | 参数   | 备注                             |
| --------- | ------ | -------------------------------- |
| setOption | option | echarts配置项，请参考echarts官网 |

### Demo

```js
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Echarts from 'youngjuning-native-echarts';

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
    }
    return (
      <Echarts option={option} height={300} />
    )
  }
}

AppRegistry.registerComponent('app', () => app)
```

## TODO

1. 提高 Echarts 版本
2. 支持 getImage 实例方法
3. 添加更多 props

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

![image](https://i.loli.net/2018/06/17/5b260bb5de954.png)

### Android

Open the Android project in the android directory with Android Studio and click run.

screenshots：

![image](https://i.loli.net/2018/06/17/5b260bc836765.png)

## License

native-echarts is released under the MIT license.
