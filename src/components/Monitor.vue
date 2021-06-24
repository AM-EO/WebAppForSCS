<template>
  <section>
    <div class="columns">
      <div class="column">

        <div class="box">
            <b-switch
            rounded="isRounded"
            size="is-large"
            type="is-success"
            passive-type='Default'
            :disabled = redGen
            v-model	= redNow
            @input="clickRedNow()">Активация</b-switch>
             <b-switch 
            rounded="isRounded"
            size="is-large"
            type="is-danger"
            passive-type='Default'
            v-model	= redGen
            @input="clickRedGen()">Блокировка</b-switch>
            <div class="content">
              <p>Свет: красный</p>
            </div>
        </div>

        <div class="box">
            <b-switch
            rounded="isRounded"
            size="is-large"
            type="is-success"
            passive-type='Default'
            :disabled = blueGen
            v-model	= blueNow
            @input="clickBlueNow()">Активация</b-switch>
             <b-switch 
            rounded="isRounded"
            size="is-large"
            type="is-danger"
            passive-type='Default'
            v-model	= blueGen
            @input="clickBlueGen()">Блокировка</b-switch>
            <div class="content">
              <p>Свет: синий</p>
            </div>
        </div>

        <div class="box">
            <b-switch
            rounded="isRounded"
            size="is-large"
            type="is-success"
            passive-type='Default'
            :disabled = pompGen
            v-model	= pompNow
            @input="clickPompNow()">Активация</b-switch>
             <b-switch 
            rounded="isRounded"
            size="is-large"
            type="is-danger"
            passive-type='Default'
            v-model	= pompGen
            @input="clickPompGen()">Блокировка</b-switch>
            <div class="content">
              <p>Полив</p>
            </div>
        </div>

        <div class="box">
            <b-switch
            rounded="isRounded"
            size="is-large"
            type="is-success"
            passive-type='Default'
            :disabled = cullGen
            v-model	= cullNow
            @input="clickCullNow()">Активация</b-switch>
             <b-switch 
            rounded="isRounded"
            size="is-large"
            type="is-danger"
            passive-type='Default'
            v-model	= cullGen
            @input="clickCullGen()">Блокировка</b-switch>
            <div class="content">
              <p>Вентиляция</p>
            </div>
        </div>

      </div>

      <div class="column">

        <div class="box">
          <div class="card-content has-text-centered">
            <h1 class="title is-1 has-text-primary"><span>{{tempData1fixed}}</span><span>&deg;C</span></h1>
            <div class="content">
              <p>Температура в помещении</p>
            </div>
          </div>
        </div>

        <p></p>

        <div class="box">
          <div class="card-content has-text-centered">
            <h1 class="title is-1 has-text-primary"><span>{{tempData2fixed}}</span><span>&deg;C</span></h1>
            <div class="content">
              <p>Температура почвы</p>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="card-content has-text-centered">
            <h1 class="title is-1 has-text-primary"><span>{{humData1fixed}}</span><span>%</span></h1>
            <div class="content">
              <p>Влажность в помещении</p>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="card-content has-text-centered">
            <h1 class="title is-1 has-text-primary"><span>{{humData2fixed}}</span><span>%</span></h1>
            <div class="content">
              <p>Влажность почвы</p>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  </section>
</template>

<script>
  export default {
    name: 'monitor',
    methods: {
            clickBlueNow() {
               this.$buefy.notification.open('Clicked!!');
               if(this.blueNow){
                 fetch('/api/buttons/bluenowon');
               }
               else{
                 fetch('/api/buttons/bluenowoff');
               }
               
            },
            clickBlueGen(){
              this.blueNow = false;
              if(this.blueGen){
                 fetch('/api/buttons/bluegenon');
               }
               else{
                 fetch('/api/buttons/bluegenoff');
                 fetch('/api/buttons/bluenowoff');
               }
            },
            clickRedNow(){
              if(this.redNow){
                 fetch('/api/buttons/rednowon');
               }
               else{
                 fetch('/api/buttons/rednowoff');
               }
            },
            clickRedGen(){
              this.redNow = false;
              if(this.redGen){
                 fetch('/api/buttons/redgenon');
               }
               else{
                 fetch('/api/buttons/redgenoff');
                 fetch('/api/buttons/rednowoff');
               }
            },
            clickPompNow(){
              if(this.pompNow){
                 fetch('/api/buttons/pompnowon');
               }
               else{
                 fetch('/api/buttons/pompnowoff');
               }
            },
            clickPompGen(){
              this.pompNow = false;
              if(this.pompGen){
                 fetch('/api/buttons/pompgenon');
               }
               else{
                 fetch('/api/buttons/pompgenoff');
                 fetch('/api/buttons/pompnowoff');
               }
            },
            clickCullNow(){
              if(this.cullNow){
                 fetch('/api/buttons/cullnowon');
               }
               else{
                 fetch('/api/buttons/cullnowoff');
               }
            },
            clickCullGen(){
              this.cullNow = false;
              if(this.cullGen){
                 fetch('/api/buttons/cullgenon');
               }
               else{
                 fetch('/api/buttons/cullgenoff');
                 fetch('/api/buttons/cullnowoff');
               }
            },
        },
    data() {
      return {
        temperature: 0,
        value: true,
        redNow: false,
        redGen: false,
        blueNow: false,
        blueGen: false,
        pompNow: false,
        pompGen: false,
        cullNow: false,
        cullGen: false,
        tempData1: 0,
        tempData2:0,
        humData1:0,
        humData2:0,
      }
    },
    computed: {
      tempData1fixed() {
        return this.tempData1.toFixed(1);
      },
      tempData2fixed(){
        return this.tempData2.toFixed(1);
      },
      humData1fixed(){
       return this.humData1.toFixed(1);
      },
      humData2fixed(){
        return this.humData2.toFixed(1);
      },

    },
    created() {
      this.interval2 = setInterval(() => {
        fetch('api/data', {
          method: 'GET',
        }).then((response) => {
          return response.json();
        }).then((data) => {
          this.tempData1 = data["tempData1"];
          this.tempData2 = data["tempData2"];
          this.humData1 = data["humData1"];
          this.humData2 = data["humData2"];
        });
      }, 3000);
    },
    beforeDestroy() {
      if (this.interval2) clearInterval(this.interval2)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>