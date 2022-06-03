<template>
  <div
    v-if="show"
    class="border-2 rounded-md shadow-md h-min border-slate-200 my-auto"
  >
    <div class="text-center m-auto p-2 font-bold">
      Posljednjih 10 prisustava:
    </div>
    <hr class="bg-slate-200 p-px h-0.5 w-4/5 ml-auto mr-auto" />
    <div class="py-2 flex flex-col gap-2 items-stretch">
      <li
        v-for="(presence, index) in last10Presences"
        :key="index"
        class="list-none hover:bg-slate-100 text-center"
      >
        {{ presence.last_changed }}
      </li>
    </div>
  </div>
</template>

<script>
import { mockPresence } from "@/mocks/mockPresence";
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
            last_changed: new Date(datapoint.last_changed).toLocaleString(),
          };
        })
        .slice(-10)
        .reverse();
    },
  },

  async created() {
    this.show = false;

    if (import.meta.env.VITE_TESTIRANJE == "true") {
      this.last10Presences = this.prepareData(mockPresence);
      this.show = true;
    } else {
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
    }
  },
};
</script>
