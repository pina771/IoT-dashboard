<template>
  <avg-temp-history />
  <div class="grid-cols-2">
    <current-temp-card />
    <bulb-color />
  </div>
  <presence-card />
  <current-temp-chart />
  <bulbs />
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
