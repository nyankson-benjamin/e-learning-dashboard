<template>
    <div class="container">
        <br>
        <div class="img">
            <div class="navs">
                <RouterLink to="/">
                    <div class="logo">
                        <img :src="logo" alt="">
                        <p><span>Assign</span> <span>IT</span></p>
                    </div>
                </RouterLink>

                <div class="nav">

                    <RouterLink to="login">Login</RouterLink>
                    <RouterLink to="dashboard">Dashboard</RouterLink>
                </div>
            </div>

            <div class="body">
                <div class="texts">
                    <h1>ASSIGN IT</h1>
                    <h2>e-learnig</h2>
                    <h3>at your home</h3>
                </div>
                <img :src="learn" alt="">
            </div>
            <div class="elips1"></div>
            <div class="elips2"></div>
        

        </div>

    </div>
</template>

<script lang="ts" setup>
import logo from '../assets/svgs/logo.svg'
import learn from '../assets/svgs/learn.svg'

</script>

<style scoped>
.container {
    background: linear-gradient(180deg, #170E7D 0%, #15104E 100%);
    padding: 10;
    margin: 0;
    height: 100vh;
}

.img {
    width: 50%;
    height: 500px;
    background-color: white;
    margin: 100px auto;
    border-radius: 20px;

}

.navs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: auto;
}

.nav {
    display: flex;
    gap: 20px;
}

.nav a {
    border: 1px solid #170E7D;
    padding: 5px 10px;
    text-decoration: none;
    border-radius: 10px;
    color: #170E7D;
}

.nav a:hover {
    background-color: #170E7D;
    color: white;
}

.logo {
    display: flex;
    align-items: center;
    gap: 5px;
}

.body {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
}

.body img {
    width: 398px;
    height: 100%;
    position: relative;
    z-index: 1;
}

.body h1 {
    font-size: 50px;
    color: #170E7D;
    text-decoration: underline;
}

.body h2 {
    margin-top: -30px;
    font-size: 50px;
}

.body h3 {
    margin-top: -45px;
    font-size: 30px;
}

a {
    text-decoration: none;
    color: #170E7D;
    font-size: 20px;
}

.elips1 {
    width: 200px;
    height: 200px;
    background-color: #170E7D;
    border-radius: 50%;
    margin-left: 450px;
    margin-top: -400px;
}

.elips2 {
    width: 200px;
    height: 200px;
    background-color: #fbca07;
    border-radius: 50%;
    margin-left: 300px;
    margin-top: -250px;
}


</style>