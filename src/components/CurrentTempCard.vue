<template>
  <div class="border-2 w-52 h-52">
    <div class="text-center">Temperatura</div>
    <div class="text-center">{{ temp }}</div>
    <div>Waspmote temp:</div>
    <div>{{ waspmoteTemp }}</div>
    <div>Aqara temp:</div>
    <div>{{ aqaraTemp }}</div>
  </div>
  <!-- TODO: Pokusati implementirati ovo  -->
  <!-- <div>
    <Line
      v-if="show"
      :chartData="tempArr"
      :chartOptions="chartOptions"
      :chart-id="'current-temp-chart'"
      :width="400"
      :height="400"
    />
  </div> -->
</template>

<script>
export default {
  name: "CurrentTempCard",

  data() {
    return {
      show: false,
      temp: null,
      waspmoteTemp: null,
      aqaraTemp: null,
    };
  },

  methods: {
    setTimer() {
      setInterval(() => this.fetchTemp(), 5000);
    },
    async fetchTemp() {
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
        "http://10.19.4.140:8123/api/states/sensor.average_temperature",
        getOptions,
      );
      const res2 = await fetch(
        "http://10.19.4.140:8123/api/states/sensor.waspmotetemp",
        getOptions,
      );
      const res3 = await fetch(
        "http://10.19.4.140:8123/api/states/sensor.aqaratemp_temperature",
        getOptions,
      );
      const data = await res.json();
      const data2 = await res2.json();
      const data3 = await res3.json();
      this.temp = data.state;
      this.waspmoteTemp = data2.state;
      this.aqaraTemp = data3.state;
    },
  },
  async created() {
    if (import.meta.env.VITE_TESTIRANJE == "true") {
      this.temp = 24.3;
    } else {
      await this.fetchTemp();
      this.setTimer();
    }
  },
};
</script>

<style></style>
