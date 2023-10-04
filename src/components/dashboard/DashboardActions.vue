<template>
    <div class="actions">
        <h1>{{ text }}</h1>
        <div class="btns">
            <AddButton :text="btnText" :icon="icon" />
            <FileUpload :text="btnText" :icon="icon" />
            
        </div>
    </div>
</template>

<script lang="ts" setup>
import AddButton from '../Buttons/AddButton.vue';
import FileUpload from '../Buttons/FileUpload.vue';
import { defineProps } from 'vue'
// export default {

// }
defineProps({
    text: { type: String, required: true },
    btnText: { type: String, required: true },
    icon: { type: String, required: true }
})
</script>

<style lang="css" scoped>
.actions {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 50px auto;
    align-items: center;
}

.btns {
    display: flex;
    gap: 30px;
    align-items: center;
}

</style>