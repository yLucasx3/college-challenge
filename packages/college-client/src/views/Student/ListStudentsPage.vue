<script lang="ts">
import { defineComponent } from 'vue'
import StudentsDataTable from '../../components/StudentsDataTable.vue';

export default defineComponent({
  components: { StudentsDataTable },
  data() {
    return {}
  }
})
</script>

<template>
  <div>
    <students-data-table />
  </div>
</template>

<style scoped></style>
