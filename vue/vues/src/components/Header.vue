<template>
  <div>
    vuex{{$store.state.Header.contents}}
    <button @click="addstatus({text: 'wojiaozhuabilea'})">增加</button>
    <!--<button @click="addstatusss">增加+1</button>-->
    <button @click="twobtn({message: '20',age: '50'})">删减</button>
    <Zbl :msg="age" @twobtn="twobtn">
      <div slot="a">woshiyiA</div>
      <div slot="b">woshiyiB</div>
    </Zbl>

  </div>
</template>

<script>
import Zbl from './Zbl'
import {mapActions} from 'vuex'
export default {
  name: 'header',
  components: {Zbl},
  data () {
    return {
      age: '100'
    }
  },
  methods: {
    ...mapActions('Header', ['addstatus']),
    twobtn (name) {
      console.log(222)
      this.age = name.message
    }
  }
}
</script>

<style scoped>

</style>
