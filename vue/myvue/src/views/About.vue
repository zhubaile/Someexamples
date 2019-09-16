<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="oneaxios">asd</button>
  </div>
</template>

<script>
import { deviceGroupaddparmas, sendMailbox } from './api/index'
export default {
  name: 'about',
  methods: {
    oneaxios () {
      console.log(111)
      sendMailbox({
        email: '1367050904@qq.com'
      }).then(({ status, data }) => {
        debugger
      })
    }
  }
}
</script>
