<script lang="ts">
import { defineComponent } from 'vue'
import AppBar from './components/AppBar.vue'

export default defineComponent({
  components: { AppBar },
  name: 'App',
  data() {
    return {}
  }
})
</script>

<template>
  <v-app>
    <app-bar />
  </v-app>
</template>

<style scoped></style>
