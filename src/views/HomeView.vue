<template>
  <div>
    <avg-temp-history />
    <current-temp-card />
    <bulb-color />
  </div>
</template>

<script>
import AvgTempHistory from "../components/AvgTempHistory.vue";
import Bulbs from "@/components/Bulbs.vue";
import CurrentTempCard from "@/components/CurrentTempCard.vue";
import BulbColor from "@/components/BulbColor.vue";
export default {
  components: { AvgTempHistory, Bulbs, CurrentTempCard, BulbColor },
};
</script>

<style></style>
