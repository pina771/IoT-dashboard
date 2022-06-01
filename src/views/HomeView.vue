<template>
  <div>
    <avg-temp-history />
    <current-temp-card />
  </div>
</template>

<script>
import AvgTempHistory from "../components/AvgTempHistory.vue";
import Bulbs from "@/components/Bulbs.vue";
import CurrentTempCard from "@/components/CurrentTempCard.vue";
export default {
  components: { AvgTempHistory, Bulbs, CurrentTempCard },
};
</script>

<style></style>
