<template>
  <div>
    <AuthLayout><LoginForm/></AuthLayout>
  </div>
</template>

<script lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import LoginForm from '@/components/Forms/LoginForm.vue';

export default {
components:{
AuthLayout,
LoginForm
}
}
</script>

<style>

</style>