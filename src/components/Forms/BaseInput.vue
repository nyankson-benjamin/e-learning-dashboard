<template>
  <label for=""> {{ label }}</label>

  <input
    type="text"
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script lang="ts" >



export default {
  props: {
    label: { type: String },
    modelValue: {
      type: String,
      default: "",
    },
  },

  emits:['update:modelValue'],

};
</script>

<style scoped>
input {
  display: flex;
  width: 400px;
  height: 44px;
  padding: 1px 10px;
  align-items: center;
  gap: 278px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
}

label {
  color: #334054;
  font-family: Work Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>