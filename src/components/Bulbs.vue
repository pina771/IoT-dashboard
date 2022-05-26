

<template>
  <div>
      <h1>Philips bulbs <Toggle v-model="value" /></h1>
      <h2>Bulb 1 <Toggle v-model="value" /></h2>
      <h2>Bulb 2 <Toggle v-model="value" /></h2>
      <h2>Bulb 3 <Toggle v-model="value" /></h2>
    <b-card
      title="Card Title"
      tag="bulbs"
      style="max-width: 20rem"
      class="mb-2"
    >


    </b-card>
  </div>
</template>


<script>
  import Toggle from '@vueform/toggle'

  export default {
    components: {
      Toggle,
    },
    data() {
      return {
        value: true
      }
    }
  }
</script>

<style src="@vueform/toggle/themes/default.css"></style>