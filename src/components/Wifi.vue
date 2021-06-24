<template>
  <nav class="panel is-info">
    <p class="panel-heading is-size-6" v-show="networks.length == 0">
      Выполняется сканирование WI-FI сетей
    </p>
    <a class="panel-block is-active" v-for="network in networks" :key="network.ssid" @click="prompt(network)">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      {{network.ssid}}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'wifi',
    data() {
      return {
        networks: [],
      }
    },
    created() {
      this.interval1 = setInterval(() => {
        fetch('api/scanwifi', {
          method: 'GET',
        }).then((response) => {
          return response.json();
        }).then((data) => {
          this.networks = data;
        });
      }, 5000);
    },
    beforeDestroy() {
      if (this.interval1) clearInterval(this.interval1);
    },
    methods: {
      prompt(network) {
            this.$buefy.dialog.prompt({
                message: `Подключение к сети "${network.ssid}"`,
                type: 'is-info',
                size: 'is-small',
                confirmText: 'Подключиться',
                cancelText: 'Отмена',
                inputAttrs: {
                    placeholder: '',
                },
                trapFocus: true,
                onConfirm: (password) => {
                  // this.$buefy.toast.open(`Вы подключены к сети: ${value}`);
                  const connection = {ssid: network.ssid, password: password};
                  this.saveNetwork(connection);
                }
            })
      },
      saveNetwork(connection) {
        fetch('api/scanwifi', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(connection)
        });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
