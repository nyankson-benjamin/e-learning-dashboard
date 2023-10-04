<template>
    <div>
        <input ref="fileInput" type="file" style="display: none" v-show="text === 'Upload a file '" />
        <button :style="btnStyle(disabled)" @click="$emit('log', title)" :disabled="disabled">{{ text }}</button>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, CSSProperties } from 'vue'

const props = defineProps({
    text: { required: true, type: String, },
    border: { required: true, type: Boolean, },
    width: { required: true, type: String },
    disabled: { type: Boolean, required: true },
    title:{type:String, required:false}

})

const btnStyle = (dis:boolean)=>{
    return {
    width: props.width,
    height: '34px',
    borderRadius: '8px',
    border: props.border ? '1px solid #170E7D' : 'none',
    background: props.border ? 'white' : props.disabled?'grey':'#170E7D',
    color: props.border ? '#170E7D' : 'white',
    fontFamily: 'Work Sans',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '36px', /* 225% */
    letterSpacing: '0.32px',
} as CSSProperties
}
</script>

<style scoped></style>