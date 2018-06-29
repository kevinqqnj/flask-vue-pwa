<template>
  <div class="hello">
    <p>
      <button id="btnAdd" style="visibility:hidden;">Install App Shortcut to Desktop</button>
    </p>
    <h1>{{ msg }}</h1>
    <h3>Git repo.</h3>
    <ul>
      <li><a href="https://github.com/kevinqqnj/flask-vue-pwa" target="_blank">flask-vue-pwa</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank">pwa</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
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
    let deferredPrompt;
    const btnAdd = document.querySelector('#btnAdd');
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('beforeinstallprompt event fired');
      e.preventDefault();
      deferredPrompt = e;
      btnAdd.style.visibility = 'visible';
    });
    btnAdd.addEventListener('click', (e) => {
      btnAdd.style.visibility = 'hidden';
      deferredPrompt.prompt();
      deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
    });
    window.addEventListener('appinstalled', (evt) => {
      app.logEvent('app', 'installed');
    });
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
