<script lang="ts">
import { defineComponent } from "vue";
import AppBar from "./components/AppBar.vue";

export default defineComponent({
  components: { AppBar },
  name: "App",
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
