<template>
  <div id="settings" class="container p-5">
    <b-tabs position="is-centered" class="block" pills card vertical>
      <b-tab-item label="Wi-Fi">
        <wifi></wifi>
      </b-tab-item>
      
      <b-tab-item label="MQTT">
        <mqtt></mqtt>
      </b-tab-item>

      <b-tab-item label="Общие">
        <general></general>
      </b-tab-item>

      <b-tab-item label="Режимы">
        <mode></mode>
      </b-tab-item>


    </b-tabs>
  </div>

</template>


<script>
import Wifi from './Wifi.vue'
import Mqtt from './Mqtt.vue'
import General from './General.vue' 
import Mode from './Mode.vue' 

export default {
  name: 'settings',
  components: {
    Wifi, Mqtt, General, Mode
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>