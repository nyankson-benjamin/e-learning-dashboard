<template>
  <button :disabled="isReady" :style="btnStyle(isReady)">{{ text }}</button>
</template>

<script lang="ts">
import store from "@/store";
import { CSSProperties, ref, watchEffect } from "vue";
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
  
  },

  

  setup() {

    const isReady= ref(true)

    watchEffect(() => {
      isReady.value = store.getters.toggleButton;

    });

    const btnStyle = (val:boolean) => {
      return {
        display: "flex",
        width: "422px",
        padding: "15px 56px",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        color: "#dfe9fa",
        fontFamily: "Inter",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
        borderRadius: "8px",
        background: val ? "#d9d9da" : "#170e7d",
        border: "none",
      } as CSSProperties;
    };

    return { btnStyle, isReady };
  },
};
</script>

<style scoped>
button {
  display: flex;
  width: 422px;
  padding: 15px 56px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #dfe9fa;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 8px;
  background: #d9d9da;
  border: none;
}
</style>