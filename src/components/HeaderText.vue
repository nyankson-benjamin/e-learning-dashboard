<template>
  <h1>
    {{ text }}
  </h1>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
h1 {
  color: #334054;
  font-family: Work Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>