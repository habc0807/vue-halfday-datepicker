# vue-halfday-datepicker

> 一个基于vue的日期选择器

## 特点

- 适用于移动端的日期选择器
- 只能进行上下午的日期选择器

## 安装

```
npm i vue-halfday-datepicker -D
cnpm i vue-halfday-datepicker -D
yarn add vue-halfday-datepicker -D
```

## 引入和注册 
在单页面应用的入口文件里引入和注册

```javascript
import VueHalfdayDatepicker from 'vue-halfday-datepicker'
Vue.use(VueHalfdayDatepicker)
```

## 使用 

``` vue
<template>
  <div id="app">
    <h2>一个基于vue的日期选择器Demo</h2>

    <div class="pickerSelect" @click="onOpenPicker">{{ pickerValue }}</div>
    <vue-halfday-datepicker :show="isShow" @onConfirm="onConfirmHandle" @onCancel="onCancelHandle"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isShow: false,
      pickerValue: '测试一下：请选择'
    }
  },
  methods: {
    onOpenPicker(e) {
        this.isShow = true
    },
    onConfirmHandle(v) {
        this.value = v
        this.pickerValue = v
        this.isShow = false
    },
    onCancelHandle(e) {
        this.isShow = false
    }
  },
}
</script>
<style>
</style>
```


## 注意
需要在根目录下添加 `.babelrc` 文件
```
{
  "presets": [
    ["env", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]]
}
```
