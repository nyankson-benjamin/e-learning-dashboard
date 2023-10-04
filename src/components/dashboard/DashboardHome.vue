<template>
  <div class="container">
    <div class="left">
      <div class="top">
        <div class="text">
          <div>

            <h3 :style="textStyle('#31394E', '30px')">Welcome back, Benjamin</h3>
            <p :style="textStyle('#788B9A', '16px')">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate
              libero et velit interdum, ac aliquet
              odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
          <div class="img">
            <img :src="user" alt="user">
          </div>
        </div>
      </div>

      <div class="overviews">
        <p class="over">Overview</p>
        <div class="overview">

          <div class="item" v-for="item in overviews" :key="item.num">
            <span class="material-icons icon">{{ item.icon }}</span>

            <div class="counts">
              <p class="count">{{ item.num }}+</p>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bars">
        <p class="over">Acitivties of a user</p>
        <div class="barchart">
          <div v-for="bar in bars" :key="bar.id" class="bar">
            <div v-for="item in bar.item" :key="item.height" :style="barChats(item.height, item.color)" class="pole">
            </div>
          </div>
        </div>

        <div class="labels">
          <div v-for="label in labels" :key="label.color" class="label-item">
            <div :style="labelStyle(label.color)">
            </div>
            <p class="over">{{ label.name }}</p>
          </div>
        </div>
      </div>
      <br>
      <br>
    </div>

    <div class="right">
      <h4 :style="notificationStyle('#1C1C1C', 600, '20px')">Notifications</h4>
      <div class="notifications">
        <div v-for="alert in notifications" :key="alert.time">
          <div class="noti">
            <span class="material-icons">{{ alert.icon }}</span>
            <div class="message">
              <p :style="notificationStyle('#1C1C1C', 400, '17px')">{{ alert.title }}</p>
              <p :style="notificationStyle('rgba(0, 0, 0, 0.40)', 400, '12px')">{{ alert.time }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="assignments">
        <br>
        <h4 :style="notificationStyle('#1C1C1C', 600, '16px')">Assignment Status</h4>

        <div class="assignment-table">
          <table>
            <tr>
              <th>Students</th>

              <th>Due date</th>
              <th>Status</th>
            </tr>

            <tr v-for="student in result?.getAllUsers" :key="student.id">
              <td>{{ student.firstName }} {{ student.lastName }}</td>
              <td>Oct 4, 2023 </td>
              <td v-if="student.id % 2 === 0" class="inprogress"> <span class="material-icons">fiber_manual_record</span>
                <span :style="statusStyle('inprogress')">In progress</span></td>
              <td v-else class="completed"><span class="material-icons">fiber_manual_record</span> <span :style="statusStyle('')">Completed</span></td>
            </tr>

          </table>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CSSProperties } from 'vue';
import user from './../../assets/svgs/user.svg'
import { bars } from '../../constants/bars'
import { notifications } from '../../constants/notifications'
import { useQuery } from '@vue/apollo-composable'
import { usersQueries } from '../../graphQL/queries'
import useWindowWidth from '../../composables/useWindowWidth'

const { result } = useQuery(usersQueries)

const windowWidth = useWindowWidth()

const containerClass = windowWidth.value>600 ?'container':'container1'

const labels = [
  { name: "New Students", color: "#1D157B" },
  { name: "Active Students", color: "#DB4427" },
  { name: "Active Students", color: "#1252CF" },
  { name: "Active Students", color: "#BDEAF3" }
]

const barChats = (height: number, color: string) => {
  return {
    height: `${height}px`,
    width: "28px",
    background: color,
  } as CSSProperties
}

const textStyle = (color: string, fontSize: string) => {
  return {
    color,
    fontSize,
    fontWeight: 400,
    letterSpacing: '0.2px',
    lineHeight: '22px',
    textAlign: 'left'
  } as CSSProperties
}


const overviews = [
  { text: 'Lecturers', icon: 'school', num: 178 },
  { text: 'Lecturers', icon: 'school', num: 178 },
  { text: 'Lecturers', icon: 'description', num: 178 },
  { text: 'Lecturers', icon: 'business_center', num: 178 },

]

const labelStyle = (color: string) => {
  return {
    width: '16px',
    height: "16px",
    borderRadius: '4px',
    background: color
  } as CSSProperties
}

const notificationStyle = (color: string, weight: number, size: string) => {
  return {
    color: color,
    fontFamily: 'Work Sans',
    fontSize: size,
    fontStyle: 'normal',
    fontWeight: weight,
    lineHeight: '14.653px',
    textAlign: 'left'
  } as CSSProperties
}

const statusStyle = (text: string) => {
  return {
    color: text==='inprogress' ?'#8A8CD9':'#4AA785',
    fontFamily: 'Work Sans',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '15.125px',
  }
}
</script>

<style scoped>
.container {
  display: flex;
  margin-left: 50px;
  gap: 50px
}
.left {
  width: 50%;
}

@media only screen and (max-width: 600px) {
  .container{
     display: flex;
  margin-left: 50px;
  gap: 50px;
  flex-direction: column;
  }

  .left{
    width: 100%;
  }
}



.text {
  border-radius: 8px;
  background: #F7F9FB;
  padding-top: 10px;
  padding-left: 20px;
  display: flex;
  margin-top: 50px;
}


.top {
  display: flex;
}

p {
  margin-top: -20px;
}

.overviews {
  margin-top: 80px;
}

.over {
  text-align: left;
  color: #9F9F9F;
  font-family: Work Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.overview {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

}

.item {
  width: 200px;
  height: 88px;
  background-color: #F7F9FB;
  border-radius: 8px;
  display: flex;
  /* margin: 20px auto; */
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.icon {
  width: 50px;
  height: 50px;
  border-radius: 104.769px;
  background: #E5E3FE;
  display: flex;
  align-items: center;
  justify-content: center;
}

.count {
  color: var(--light-version-type-text-dark, #06152B);
  font-family: Work Sans;
  font-size: 16.702px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.counts {
  margin-top: 25px;
}

.item span {
  color: #151050ff
}

.barchart {
  display: flex;
  /* margin-top: 100px; */
  gap: 50px;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  padding-left: 10px;
}

.bar {
  display: flex;
  transform: rotate(180deg);
  gap: 10px;
}

.labels {
  margin: 50px auto;
  display: flex;
  gap: 20px;
  width: 80%;
}

.label-item {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.bars {
  margin-top: 100px;
}



.notifications {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 20px;
  /* justify-content: start; */
}

.noti {
  display: flex;
  align-items: center;
  gap: 10px;

}

.noti span {
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 5.861px;
  background: #E3F5FF;
  justify-content: center;
}

.message {
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  gap: 10px;
}

.assignments {
  border-radius: 7.57px;
  background: var(--primary-light, #F7F9FB);
}

.assignment-table {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  height: 680px;
  overflow-y: scroll;
}

th,
td {
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 40px;
}

table {
  height: 200px;
}

.inprogress,
.completed {
  display: flex;
  align-items: center;
}

.assignments h4 {
  margin-left: 30px;
}


</style>