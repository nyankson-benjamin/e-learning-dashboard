<template>
    <div>
        <button @click="openModal">{{ text }}<span class="material-icons">
                {{ icon }}
            </span></button>
    </div>
</template>

<script lang="ts" setup>
import store from '@/store';
import { defineProps } from 'vue'

defineProps(({
    text: { type: String, required: true },
    icon: { type: String, required: true }
}))

const openModal = () => {
    store.dispatch('openModal',)
}
</script>

<style lang="css" scoped>
button {
    display: inline-flex;
    padding: 5px 16px 5px 17px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    background: #170E7D;
    color: #FFF;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    border: none;
}
</style>