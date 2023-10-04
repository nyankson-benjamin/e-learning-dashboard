<template>
    <div id="myModal" class="modal">

        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <slot></slot>

        </div>
    </div>
</template>

<script lang="ts" setup>
import store from '@/store';


const closeModal = ()=>{
    store.dispatch('openFileModal')
}
</script>

<style lang="css" scoped>
.modal {

    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);

}


.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 428px;
    border-radius: 16px;
    background: #FFF;
}


.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>