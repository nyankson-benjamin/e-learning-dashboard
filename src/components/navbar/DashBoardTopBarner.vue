<template>
  <div class="navbar">
    <div class="nav-item-container">
      <div class="left">
        <div class="logo">
          <img :src="logo" alt="logo" />
          <p class="text1">Assign</p>
          <p class="text2">IT</p>
        </div>

        <div class="dashboard-buttons">
          <div v-for="item in dashboardItems" :key="item.id">
            <DashBoardNavButtons :item="item" />
          </div>
        </div>
      </div>
      <div class="right">
        <button>Logout</button>

        <p class="email">me@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script lang ="ts">
import DashBoardNavButtons from "../dashboard/DashBoardNavButtons.vue";
import { dashboardItems } from "../../constants/dashboardItems";
import logo from '../../assets//svgs/logo.svg'
export default {
  components: {
    DashBoardNavButtons,
  },
  data() {
    return {
      dashboardItems,
      logo
    };
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 80px;
  background: linear-gradient(180deg, #170e7d 0%, #15104e 100%);
  display: flex;
}

.text1 {
  color: #fff;
  font-family: Jura;
  font-size: 19.899px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.text2 {
  color: #ffffff;
  font-family: Jura;
  font-size: 19.899px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 40px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-item-container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.dashboard-buttons {
  display: flex;
  align-items: center;
  gap: 50px;
}

.left {
  display: flex;
  align-items: center;
  gap: 100px;
}

.right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.right button {
  display: inline-flex;
  padding: 7px 24px 8px 22px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #fff;
  color: #fff;
  font-family: Work Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: transparent;
}

.email {
  color: #fff;
  text-align: right;
  font-family: Work Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>