<template>
  <div v-if="show">
    <li v-for="(presence, index) in last10Presences" :key="index">
      {{ presence.last_changed }}
    </li>
  </div>
</template>

<script>
export default {
  name: "PresenceCard",
  data() {
    return {
      last10Presences: [],
      show: false,
    };
  },

  methods: {
    prepareData(data) {
      var filtered = data[0].filter((datapoint) => {
        return datapoint.state == "on";
      });

      return filtered
        .map((datapoint) => {
          return {
            state: datapoint.state,
            last_changed: new Date(datapoint.last_changed),
          };
        })
        .slice(-10)
        .reverse();
    },
  },

  async created() {
    this.show = false;
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
      "http://10.19.4.140:8123/api/history/period?filter_entity_id=binary_sensor.waspmotepir",
      getOptions,
    );
    const data = await res.json();
    this.last10Presences = this.prepareData(data);
    this.show = true;
  },
};
</script>
