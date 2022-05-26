<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
  </header>
  <avg-temp-history />
</template>
<script>
import AvgTempHistory from "@/components/AvgTempHistory.vue";
export default {
  components: { AvgTempHistory },
};
</script>
