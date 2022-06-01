<template>
  <div class="border-2 w-52 h-52">
    <div class="text-center">Temperatura</div>
    <div class="text-center">{{ temp }}</div>
  </div>
</template>

<script>
export default {
  name: "CurrentTempCard",
  data() {
    return {
      temp: null,
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
      const data = await res.json();
      this.temp = data.state;
    },
  },
  async created() {
    await this.fetchTemp();
    this.setTimer();
  },
};
</script>

<style></style>
