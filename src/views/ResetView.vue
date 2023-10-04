<template>
  <AuthLayout title="reset">
    <ResetForm/>
  </AuthLayout>
</template>

<script lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import ResetForm from '@/components/Forms/ResetForm.vue';
export default {
  components: {
    AuthLayout,
    ResetForm
  },
};
</script>

<style>
</style>