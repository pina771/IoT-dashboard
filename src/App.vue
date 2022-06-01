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
  <home-view />
</template>
<script>
import AvgTempHistory from "@/components/AvgTempHistory.vue";
import HomeView from "./views/HomeView.vue";
export default {
  components: { HomeView },
};
</script>
