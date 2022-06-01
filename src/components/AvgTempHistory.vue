<template>
  <div>
    <h1>Povijesni prikaz prosječne temperature</h1>
  </div>
  <LineChart :dataProp="tempArr" v-if="dataLoaded" />
  <LineChart
    :dataProp="last24Hrs"
    v-if="dataLoaded2"
    :chartId="'line-chart-2'"
    :decimate="false"
  />
</template>

<script>
import BarChart from "@/components/BarChart.vue";
import LineChart from "@/components/LineChart.vue";
import { dummyData, generateData } from "@/data.js";
export default {
  name: "AvgTempHistory",
  data() {
    return {
      tempArr: [],
      dataLoaded: false,
      dataLoaded2: false,
      last24Hrs: [],
    };
  },
  components: { BarChart, LineChart },

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

      const currentDate = new Date();
      const lastWeek = new Date(
        currentDate.getTime() - 7 * 24 * 60 * 60 * 1000,
      );

      const res = await fetch(
        "http://10.19.4.140:8123/api/history/period/" +
          lastWeek.toISOString() +
          "?filter_entity_id=sensor.average_temperature" +
          "&end_time=" +
          encodeURIComponent(currentDate.toISOString()),
        getOptions,
      );
      const data = await res.json();
      var filteredData = data[0].filter((datapoint) => {
        return datapoint.state != "unknown";
      });
      return filteredData.map((datapoint) => {
        return {
          x: Date.parse(datapoint.last_changed),
          y: Number.parseFloat(datapoint.state),
        };
      });
    },

    async fetchLast24Hrs() {
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
        "http://10.19.4.140:8123/api/history/period?filter_entity_id=sensor.average_temperature",
        getOptions,
      );
      const data = await res.json();
      console.log(data);

      var filteredData = data[0].filter((datapoint) => {
        return datapoint.state != "unknown";
      });
      return filteredData.map((datapoint) => {
        return {
          x: Date.parse(datapoint.last_changed),
          y: Number.parseFloat(datapoint.state),
        };
      });
    },
  },

  async created() {
    this.tempArr = await this.fetchTempData();
    this.last24Hrs = await this.fetchLast24Hrs();
    this.dataLoaded2 = true;
    this.dataLoaded = true;
  },
};
</script>

<style></style>
