<template>
  <div class="grid grid-cols-5 gap-4 pt-4 pl-4 pr-4">
    <div class="col-span-3 grid grid-cols-2 h-min gap-4">
      <presence-card />
      <div class="flex flex-col gap-4 items-center">
        <current-temp-card />
        <div
          class="border-2 h-min rounded-md shadow-md bg-white flex flex-col w-full"
        >
          <bulbs />
          <bulb-color />
        </div>
      </div>
    </div>
    <avg-temp-history />
  </div>
</template>

<script>
import AvgTempHistory from "../components/AvgTempHistory.vue";
import Bulbs from "@/components/Bulbs.vue";
import CurrentTempCard from "@/components/CurrentTempCard.vue";
import BulbColor from "@/components/BulbColor.vue";
import PresenceCard from "@/components/PresenceCard.vue";
export default {
  components: {
    AvgTempHistory,
    Bulbs,
    CurrentTempCard,
    BulbColor,
    PresenceCard,
  },
};
</script>

<style></style>
