<template>
    <div>
        <h2 @click="openModal">Upload <span class="material-icons">
                backup
            </span></h2>

    </div>
</template>

<script lang="ts" setup>


import store from '@/store';

const openModal = () => {
    store.dispatch('openFileModal')
}

</script>

<style scoped>
h2 {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #170E7D;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
}
</style>