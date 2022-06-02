<template>
  <div>
    <h1><b>Philips bulbs</b></h1>
    <h2>Bulb 1 <Toggle v-model="value1" /></h2>
    <h2>Bulb 2 <Toggle v-model="value2" /></h2>
    <h2>Bulb 3 <Toggle v-model="value3" /></h2>
    <h3> STANJE: {{this.bulbs}} </h3>
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
import Toggle from "@vueform/toggle";
import { computed } from "@vue/runtime-core";

export default {
  computed: {
    regValue1() {
      if (this.bulbs[0].state == "on") {
        return true;
      } else return false;
    },
    regValue2() {
      if (this.bulbs[1].state == "on") {
        return true;
      } else return false;
    },
    regValue3() {
      if (this.bulbs[2].state == "on") {
        return true;
      } else return false;
    },
  },

  components: {
    Toggle,
  },
  data() {
    return {
      value1: computed.regValue1,
      value2: computed.regValue2,
      value3: computed.regValue3,
    };
  },

  methods: {
    async fetchBulbStatus() {
      const getOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " +
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIzZGNkYmI0ZGJkZDA0MWRkYmY3ODkwZWE0MzVmZTM4YyIsImlhdCI6MTY1MzU1NDAzMSwiZXhwIjoxOTY4OTE0MDMxfQ.u_QQyMTrzd91g9HfuVY-DROGGawLbatsF_88eJSHOPE",
        },
      };
      const res = await fetch(
        "http://10.19.4.140:8123/api/states/light.philipsbulb",
        getOptions,
      );
      const data = await res.json();
      return data;
    },
  },

  async created() {
    this.bulbs = await this.fetchBulbStatus();
    console.log(this.bulbs);
  },
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>
