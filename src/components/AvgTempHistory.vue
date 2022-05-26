<template>
  <div>
    <h1>AvgTempHistory komponenta</h1>
  </div>
</template>

<script>
export default {
  name: "AvgTempHistory",
  data() {
    return {
      tempArr: [],
    };
  },

  methods: {
    async fetchTempData() {
      const getOptions = {
        method: "GET",
        /* TODO: Zamijeniti token sa storeom */
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " +
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIzZGNkYmI0ZGJkZDA0MWRkYmY3ODkwZWE0MzVmZTM4YyIsImlhdCI6MTY1MzU1NDAzMSwiZXhwIjoxOTY4OTE0MDMxfQ.u_QQyMTrzd91g9HfuVY-DROGGawLbatsF_88eJSHOPE",
        },
      };
      const res = await fetch(
        "http://10.19.4.140:8123/api/history/period/" +
          "2022-05-26T08:01:40.141006+00:00" +
          "?filter_entity_id=sensor.average_temperature",
        getOptions,
      );
      const data = await res.json();
      return data;
    },
  },

  async created() {
    this.tempArr = await this.fetchTempData();
    console.log(this.tempArr);
  },
};
</script>

<style></style>
