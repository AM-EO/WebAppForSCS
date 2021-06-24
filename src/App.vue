<template>
  <div id="app" class="container p-5">
    <b-tabs position="is-centered" class="block">
      <b-tab-item label="Управление">
        <monitor></monitor>
      </b-tab-item>
      <b-tab-item label="Настройки">
        <settings></settings>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import Monitor from './components/Monitor.vue'
import Settings from './components/Settings.vue'
//import Wifi from './components/Wifi.vue'
//import Mqtt from './components/Mqtt.vue'

export default {
  name: 'App',
  components: {
    Monitor, Settings
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
