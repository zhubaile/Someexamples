<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="zbl">anniu</button>
    <br>
    <br>
    <br>
    <h1>{{ $store.state.home.content }}</h1>
    <button @click="addstatus">按钮一</button>
    <button @click="addstatustwo({text: 'zhubaile',id: '1'})">按钮二</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { deviceGroupaddparmas, sendMailbox } from './api/index'
import { mapActions } from 'vuex'
export default {
  name: 'home',
  components: {
    HelloWorld

  },
  methods: {
    ...mapActions('home', ['addstatus', 'addstatustwo']),
    zbl () {
      console.log(111)
      deviceGroupaddparmas().then(({ status, data }) => {
        debugger
      })
    }
  }
}
</script>
