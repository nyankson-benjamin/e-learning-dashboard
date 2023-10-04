<template>
  <div>
    <p @click="navigate(item.route)">{{ item.name }}</p>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { NavItemProps } from "../../Types/NavBarButons";
import router from "@/router";
export default {
  props: {
    item: {
      required: true,
      type: Object as PropType<NavItemProps>,
    },
  },

  data() {
    return {
      text: "",
    };
  },

  methods: {
    navigate(route: string) {
      router.push(`${route}`);
    },
  },
};
</script>

<style scoped>
p {
  color: #fff;
  font-family: Work Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
}
</style>