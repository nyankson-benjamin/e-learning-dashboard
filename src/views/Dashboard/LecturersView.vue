<template>
  <DashBoardLayout> <LecturersList /> </DashBoardLayout>
</template>

<script lang="ts">
import DashBoardLayout from "../../layouts/DashBoardLayout.vue";
import LecturersList from "@/components/dashboard/LecturersList.vue";
export default {
  components: {
    DashBoardLayout,
    LecturersList,
  },
};
</script>

<style>
</style>