<template>
  <div class="card has-text-left">
    <div class="card-content">
     <section>
        <b-field>
            <b-radio v-model="modeinfo"
                native-value="0">
                Прорастание
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="modeinfo"
                native-value="1">
                Вегетация
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="modeinfo"
                native-value="2">
                Бутонизация
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="modeinfo"
                native-value="3">
                Цветение
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="modeinfo"
                native-value="4">
                Плодоношение
            </b-radio>
        </b-field>
    </section>
      
     

      <b-field>
        <p class="control">
          <b-button label="Сохранить" type="is-primary" class="is-fullwidth" @click="saveMode()" />
        </p>
      </b-field>
    </div>
  </div>
</template>

<script>


export default {
  name: 'mode',
  data() {
    return  {
      modeinfo:0,
    } 
  },
  methods: {
    saveMode() {
      fetch('api/mode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(this.modeinfo)
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
