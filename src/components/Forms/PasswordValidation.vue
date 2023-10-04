<template>
  <div class="card" v-show="!allSet">
    <p class="header">Your password must contain:</p>

    <div>
      <p class="validate">
        <span :style="iconStyle('white', 'red')" v-if="!pasLength">x</span>
        <span :style="iconStyle('white', '#06B317')" v-else> &#10003;</span>
        <span>Atleast 8 charactrs</span>
      </p>
      <p class="validate">
        <span :style="iconStyle('white', 'red')" v-if="!lowerCase">x</span>
        <span :style="iconStyle('white', '#06B317')" v-else>&#10003;</span>
        <span>Lower case letters (a-z)</span>
      </p>
      <p class="validate">
        <span :style="iconStyle('white', 'red')" v-if="!upperCase">x</span>
        <span :style="iconStyle('white', '#06B317')" v-else>&#10003;</span>
        <span>Upper case letters (A-Z)</span>
      </p>
      <p class="validate">
        <span :style="iconStyle('white', 'red')" v-if="!numbs">x</span>
        <span :style="iconStyle('white', '#06B317')" v-else>&#10003;</span>
        <span>Numbers (0-9)</span>
      </p>

      <p class="validate">
        <span :style="iconStyle('white', 'red')" v-if="!specialChar">x</span>
        <span :style="iconStyle('white', '#06B317')" v-else>&#10003;</span>
        <span>Special (@!#$%^&*)</span>
      </p>

      <p class="validate" v-show="reset">
        <span :style="iconStyle('white', 'red')" v-if="!passMatch">x</span>
        <span :style="iconStyle('white', '#06B317')" v-else>&#10003;</span>
        <span>Passwords Match</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CSSProperties, ref, watchEffect } from "vue";
import store from "@/store";
import { defineProps } from "vue";

const props = defineProps({
  password: { type: String, required: true },
  confirmPass: { type: String, required: false },
  reset: { type: Boolean }
});

const pasLength = ref(false);
const lowerCase = ref(false);
const upperCase = ref(false);
const numbs = ref(false);
const specialChar = ref(false);
const passMatch = ref(false)
const allSet = ref(false);

watchEffect(() => {
  props.password.length > 8
    ? (pasLength.value = true)
    : (pasLength.value = false);

  /.*[a-z].*/.test(props.password)
    ? (lowerCase.value = true)
    : (lowerCase.value = false);

  /.*[A-Z].*/.test(props.password)
    ? (upperCase.value = true)
    : (upperCase.value = false);

  /.*\d.*/.test(props.password) ? (numbs.value = true) : (numbs.value = false);

  props.password.includes("!") ||
    props.password.includes("@") ||
    props.password.includes("#") ||
    props.password.includes("$") ||
    props.password.includes("%") ||
    props.password.includes("^") ||
    props.password.includes("&") ||
    props.password.includes("*")
    ? (specialChar.value = true)
    : (specialChar.value = false);

  (props.password === props.confirmPass && props.confirmPass.length !== 0) ? (passMatch.value = true) : (passMatch.value = false)

  pasLength.value &&
    lowerCase.value &&
    upperCase.value &&
    numbs.value &&
    passMatch &&
    specialChar
    ? (setTimeout(() => {
      allSet.value = true;
    }, 1000),
      store.dispatch("toggleButton", false))
    : ((allSet.value = false), store.dispatch("toggleButton", true));
});

const iconStyle = (color: string, bgColor: string) => {
  return {
    color: color,
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0.25px",
    background: bgColor,
    padding: "2px",
    borderRadius: "100%",
    width: "15px",
    height: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as CSSProperties;
};

</script>

<style scoped>
.card {
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 2px;
  border: 1px solid var(--Border-Color, #c2c8d0);
  background: #fff;
  position: absolute;
  z-index: 1;
  margin-top: -55px;
  margin-left: -60px;
}

.header {
  color: var(--Text-Primary, #2d333a);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.25px;
  text-align: center;
}

.validate {
  color: var(--Text-Secondary, #858585);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  display: flex;
  gap: 10px;
}
</style>