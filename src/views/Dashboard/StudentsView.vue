<template>
  <DashBoardLayout> <StudentsList /> </DashBoardLayout>
</template>

<script lang="ts">
import DashBoardLayout from "../../layouts/DashBoardLayout.vue";
import StudentsList from "@/components/dashboard/StudentsList.vue";
export default {
  components: {
    DashBoardLayout,
    StudentsList,
  },
};
</script>

<style>
</style>