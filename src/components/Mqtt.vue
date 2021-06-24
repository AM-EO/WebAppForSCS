<template>
  <div class="card has-text-left">
    <div class="card-content">
      <b-field label="Сервер">
        <b-input v-model="mqttConnection.server" placeholder=""></b-input>
      </b-field>
      <b-field label="Порт">
        <b-input v-model="mqttConnection.port" placeholder="1883" type="number" min="0">
        </b-input>
      </b-field>
      <b-field label="Пользователь">
        <b-input v-model="mqttConnection.user" placeholder=""></b-input>
      </b-field>
      <b-field label="Пароль">
        <b-input type="password" v-model="mqttConnection.password" placeholder=""></b-input>
      </b-field>
      <b-field label="Топик данных">
        <b-input v-model="mqttConnection.eventTopic" placeholder=""></b-input>
      </b-field>
      <b-field label="Топик комманд">
        <b-input v-model="mqttConnection.commandTopic" placeholder=""></b-input>
      </b-field>
      <b-field>
        <p class="control">
          <b-button label="Сохранить" type="is-primary" class="is-fullwidth" @click="saveMQTT()" />
        </p>
      </b-field>
    </div>
  </div>
</template>

<script>
class MQTTConnection {
  constructor() {
    this.server = '';
    this.port = 1883;
    this.user = '';
    this.password = '';
    this.eventTopic = '';
    this.commandTopic = '';
  }
}

export default {
  name: 'mqtt',
  data() {
    return {
      mqttConnection: new MQTTConnection
    }
  },
  methods: {
    saveMQTT() {
      fetch('api/mqtt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(this.mqttConnection)
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
