<template>
  <label>{{ text }}</label>
</template>

<script lang="ts">
export default {
  props: {
    text: String,
  },
};
</script>

<style scoped>
label {
  color: #334054;
  font-family: Work Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>