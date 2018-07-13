<template>
  <div class="hello">
<!--     <p>
      <button id="btnAdd" style="visibility:hidden;">Install App Shortcut to Desktop</button>
    </p> -->
    <h1>{{ msg }}</h1>
    <h3>Article - NetworkFirst (expect offline page if no connection)</h3>
    <ul>
      <li><a href="/article/1">Article 1</a></li>
    <li><a href="/article/2">Article 2</a></li>
      <li><a href="/article/3">Article 3</a></li>
      <li><a href="/article/404">Article ? (expect 404)</a></li>
    </ul>
    <h3>Post - CacheFirst (still OK if no connection)</h3>
    <ul>
      <li><a href="/post/1">Post 1</a></li>
    <li><a href="/post/2">Post 2</a></li>
      <li><a href="/post/3">Post 3</a></li>
      <li><a href="/post/404">Post ? (expect 404)</a></li>
    </ul>
    <h3>Git repo.</h3>
    <ul>
      <li><a href="https://github.com/kevinqqnj/flask-vue-pwa" target="_blank">flask-vue-pwa</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank">cli-plugin-pwa</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
    }
  },
  mounted() {
    // let deferredPrompt;
    // const btnAdd = document.querySelector('#btnAdd');
    // window.addEventListener('beforeinstallprompt', (e) => {
    //   console.log('beforeinstallprompt event fired');
    //   e.preventDefault();
    //   deferredPrompt = e;
    //   btnAdd.style.visibility = 'visible';
    // });
    // btnAdd.addEventListener('click', (e) => {
    //   btnAdd.style.visibility = 'hidden';
    //   deferredPrompt.prompt();
    //   deferredPrompt.userChoice
    //     .then((choiceResult) => {
    //       if (choiceResult.outcome === 'accepted') {
    //         console.log('User accepted the A2HS prompt');
    //       } else {
    //         console.log('User dismissed the A2HS prompt');
    //       }
    //       deferredPrompt = null;
    //     });
    // });
    // window.addEventListener('appinstalled', (evt) => {
    //   app.logEvent('app', 'installed');
    // });
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
