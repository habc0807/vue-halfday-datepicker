# vue-halfday-datepicker

> 一个基于vue的带上、下午的移动端日期选择器

## Demo

[在线地址](https://habc0807.github.io/vue-halfday-datepicker/index.html)

## Demo

[在线地址](https://habc0807.github.io/vue-halfday-datepicker/index.html)

## 特点

- 移动端
- 带上、下午
- vue插件

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
