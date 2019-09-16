<template>
  <div>
    <slot name="a" />
    {{msg}}
    我叫朱柏乐，hello,word
    {{message}}
    <slot name="b" />
    <button @click="onebtn">我是点击改变自身按钮</button>
    <button @click="$emit('twobtn',{message})">我是点击改变父元素按钮</button>
    <button @click="oneaxios">axios请求</button>
  </div>
</template>

<script>
import { deviceGroupaddparmas } from './api'
export default {
  props: ['msg'],
  name: 'Zbl',
  data () {
    return {
      message: '朱柏乐'
    }
  },
  methods: {
    onebtn () {
      this.message = '我是谁（变成了文字）'
    },
    oneaxios () {
      deviceGroupaddparmas().then(({status, data}) => {
        debugger
      })
    }
  }
}
</script>

<style scoped>

</style>
