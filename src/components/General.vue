<template>
  <section>
        <div class="card has-text-left">
          <div class="card-content">
            <b-field type="is-info" label="Синхронизация времени" :message="'Время на сервере: ' + serverTime">
              <b-timepicker v-model="pcTime"></b-timepicker>
            </b-field>
            <b-field label="Комфорт">
              <b-input v-model="comfort" placeholder="20"></b-input>
            </b-field>
            <b-field label="Эконом">
              <b-input v-model="econom" placeholder="17"></b-input>
            </b-field>
            <b-field label="Гистерезис">
              <b-input v-model="deadband" placeholder="1"></b-input>
            </b-field>
            <b-field label="Длительность">
              <b-slider v-model="timeRange" :min="0" :max="24" :step="0.5" ticks>
              </b-slider>
            </b-field>
            <b-field>
              <p class="control">
                <b-button @click="saveMonitor()" label="Сохранить" type="is-primary" class="is-fullwidth" />
              </p>
            </b-field>
          </div>
        </div>
  </section>
</template>

<script>
  export default {
    name: 'general',
    data() {
      return {
        timeRange: [9, 15],
        comfort: 20,
        econom: 18,
        deadband: 1,
        pcTime: new Date(),
        serverTime: '00:00'
      }
    },
    created() {
      this.interval1 = setInterval(() => this.pcTime = new Date(), 1000);
      this.interval2 = setInterval(() => {
        fetch('api/clock', {
          method: 'GET',
        }).then((response) => {
          return response.json();
        }).then((data) => {
          this.serverTime = this.timeReverseConvert(data["time"]);
        });
      }, 3000);
    },
    beforeDestroy() {
      if (this.interval1) clearInterval(this.interval1)
      if (this.interval2) clearInterval(this.interval2)
    },
    methods: {
      saveMonitor() {
        const monitor = {};
        const clock = {};

        monitor.comfort = this.comfort;
        monitor.econom = this.econom;
        monitor.start = this.timeForwardConvert(this.timeRange[0]);
        monitor.end = this.timeForwardConvert(this.timeRange[1]);
        monitor.deadband = this.deadband;

        clock.time = this.timeForwardConvert(this.pcTime.getHours() + Number((this.pcTime.getMinutes() / 60)
          .toPrecision(1)));

        fetch('api/setup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(monitor)
        });

        fetch('api/clock', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(clock)
        });
      },
      timeForwardConvert(time) {
        return Math.round(time * 60 * 60 * 1000);
      },
      timeReverseConvert(time) {
        let minutes = Math.floor((time / (1000 * 60)) % 60);
        let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        return hours + ':' + minutes;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>