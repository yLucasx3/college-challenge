<script lang="ts">
import { defineComponent } from "vue";
import AppBar from "../components/AppBar.vue";

export default defineComponent({
  components: { AppBar },
  name: "DefaultLayout",
});
</script>

<template>
  <app-bar />
</template>
