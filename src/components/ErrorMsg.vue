<template>
  <div>
    <img src="../assets/svgs/ErrorImg.svg" alt="" />
    <p>{{ msg }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    msg: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
p {
  color: #ef2637;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 150% */
  letter-spacing: 0.28px;
  margin-left: -45px;
  margin-top: 30px;
}

div {
  display: flex;
  justify-content: center;
  width: 200px;
  margin-top: -20px;
}
</style>