<template>
  <div class="home">
    <img src="../assets/logo.png" style="height: 100px;">
    <img src="../assets/pwa.png" style="height: 100px;">
    <img src="../assets/flask.png" style="height: 100px;">
    <HelloWorld msg="Vue.js + PWA on Flask backend"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
