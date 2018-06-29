<template>
  <div class="home">
    <img src="../assets/logo.png">
    <img src="../assets/pwa.png">
    <img src="../assets/flask.png">
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
