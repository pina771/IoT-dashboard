<template>
  <div>
    <div class="p-2 flex flex-col items-center">
      <ColorPicker
        :color="color"
        @color-change="updateColor"
        :visible-formats="['rgb']"
        default-format="rgb"
      />
    </div>
    <div class="flex justify-around p-2 flex-wrap">
      <button
        class="py-2 px-8 rounded-md bg-slate-200 font-bold hover:bg-slate-700 hover:text-white"
        @click.prevent="changeBulbColor('light.philipsbulb')"
      >
        B1
      </button>
      <button
        class="py-2 px-8 rounded-md bg-slate-200 font-bold hover:bg-slate-700 hover:text-white"
        @click.prevent="changeBulbColor('light.philipsbulb2')"
      >
        B2
      </button>
      <button
        class="py-2 px-8 rounded-md bg-slate-200 font-bold hover:bg-slate-700 hover:text-white"
        @click.prevent="changeBulbColor('light.philipsbulb3')"
      >
        B3
      </button>
    </div>
  </div>
</template>

<script>
import { ColorPicker } from "vue-accessible-color-picker";

export default {
  components: {
    ColorPicker,
  },
  data() {
    return {
      color: "rgb(255 0 0 / 1)",
    };
  },

  methods: {
    updateColor(eventData) {
      this.color = eventData.cssColor;
    },

    async changeBulbColor(idLampa) {
      const rgb_color = this.parseColors(this.color);
      const entity_id = idLampa;
      const body = {
        entity_id: entity_id,
        rgb_color: rgb_color,
      };
      const postOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " +
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIzZGNkYmI0ZGJkZDA0MWRkYmY3ODkwZWE0MzVmZTM4YyIsImlhdCI6MTY1MzU1NDAzMSwiZXhwIjoxOTY4OTE0MDMxfQ.u_QQyMTrzd91g9HfuVY-DROGGawLbatsF_88eJSHOPE",
        },
        body: JSON.stringify(body),
      };

      await fetch(
        "http://10.19.4.140:8123/api/services/light/turn_on",
        postOptions,
      );
    },

    parseColors(colorString) {
      let info = colorString.split("(")[1].split(" ");
      let R = parseFloat(info[0]);
      let G = parseFloat(info[1]);
      let B = parseFloat(info[2]);
      return [R, G, B];
    },
  },
};
</script>
