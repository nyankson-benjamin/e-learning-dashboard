<template>
  <div>
    <router-link :to="route">{{ name }}</router-link>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #170e7d;
  display: flex;
  font-weight: 600;
}
</style>