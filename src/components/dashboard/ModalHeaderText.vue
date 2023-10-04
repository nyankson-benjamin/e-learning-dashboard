<template>
    <div class="header">
        <h3>
            {{ header }}
        </h3>

        <p>{{ subHeader }}</p>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
    header: { required: true, type: String },
    subHeader: { required: true, type: String }
})
</script>

<style lang="css" scoped>
.header {
    width: 70%;
    text-align: center;
    margin: 0 auto;
}

h3 {
    color: var(--default-black, #31394E);
    font-family: Work Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.2px;
}

p {
    color: var(--default-black, #31394E);
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.2px;
}
</style>