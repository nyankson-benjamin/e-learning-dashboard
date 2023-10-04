<template>
    <div class="upload-container">
        <br>
        <div class="container">
            <svg xmlns="http://www.w3.org/2000/svg" width="93" height="75" viewBox="0 0 93 75" fill="none">
                <path
                    d="M24.0178 25.0929L32.9674 19.7294L27.9718 10.7429H74.9534L51.4702 53.0246L46.4747 44.0224L37.5252 49.4018L51.4702 74.4949L92.8524 0H10.0728L24.0178 25.0929Z"
                    fill="#414042" />
            </svg>
            <CreateUserButton text="Upload a file" :border="false" width="200px" />

            <div class="text">
                <h3 :style="textStyle('16px', 700)">Or drop a file</h3>
                <h5 :style="textStyle('16px', 700)">NB: Only csv files accepted</h5>
                <p :style="textStyle('12px', 400)">It must have a required columns of emails, firstname and lastname</p>
            </div>


        </div>

    </div>
</template>

<script lang="ts" setup>
import CreateUserButton from '../Buttons/CreateUserButton.vue';



const textStyle = (size: string, weight: number) => {
    return {
        color: '#C7C7C7',
        fontFamily: 'Work Sans',
        fontSize: size,
        fontStyle: 'normal',
        fontWeight: weight,
        lineHeight: 'normal',
    }
}
</script>

<style scoped>
.upload-container {
    width: 395px;
    height: 357px;
    flex-shrink: 0;
    border-radius: 16px;
    background: #FBFBFB;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 20px auto;
}

.container {
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.text {
    width: 50%;
}
</style>