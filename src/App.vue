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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
  text-align: left;
}

ul {
  /* list-style-type: none; */
  padding: 0;
  text-align: left;
}

li {
  display: inline-block;
  margin: 0 10px;
  text-align: left;
}

a {
  color: #42b983;
}
</style>
