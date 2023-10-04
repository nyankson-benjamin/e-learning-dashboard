<template>
  <div >
    <DashBoardTopBarner />

    <slot></slot>
  </div>
</template>

<script lang="ts">
import DashBoardTopBarner from "../components/navbar/DashBoardTopBarner.vue";
export default {
  components: {
    DashBoardTopBarner,
  },
};
</script>

<style>
</style>