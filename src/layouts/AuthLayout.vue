<template>
  <div class="container">
    <div class="left" v-show="windowWidth>600">
      <div>
        <h2 :style="textStyle('36px', 800)">
          A Git- Inspired Assignment submission system
        </h2>
        <div class="content">
          <h3 :style="textStyle('16px', 400)">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </h3>
        </div>
      </div>

      <div class="imgs">
        <img :src="lap" alt="" />
        <img :src="lock" alt="" class="lock" v-if="title === 'reset'" />

        <!-- <img :src="lap" alt="" />
        <img :src="lap" alt="" /> -->
      </div>
    </div>
    <div class="right">
      <div class="children">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { CSSProperties, } from 'vue';
import lap from "../assets/svgs/lap.png";
import lock from "../assets/svgs/lock.svg";
import useWindowWidth from '../composables/useWindowWidth'
export default {
  props: {
    title: String,
  },
  
  setup(){
    const textStyle = (size: string, weight: number) => {
      return {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Work Sans",
        fontSize: size,
        fontStyle: "normal",
        fontWeight: weight,
        lineHeight: "130%",
      } as CSSProperties;
    };
    
    const windowWidth =useWindowWidth()
    return {
      textStyle,
      lap,
      lock,
      windowWidth
    };
  },
  
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
}

.left {
  display: flex;
  width: 590px;
  height: 100vh;
  flex-direction: column;
  align-items: flex-end;
  gap: 135px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #170e7d 0%, #15104e 100%);
}

.content {
  width: 449px;
  margin: 0 auto;
}
.imgs {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -100px;
}
.lock {
  margin-top: -300px;
  margin-left: -100px;
}

.right {
  min-width: 500px;
  max-height: 500px;
  margin: 100px auto;
  background: #fff;
  box-shadow: 0px 0px 32px 0px rgba(85, 85, 85, 0.25);
}

.children {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 43px;
}
</style>