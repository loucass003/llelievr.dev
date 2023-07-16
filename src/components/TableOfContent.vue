<template>
    TOC
</template>


<script setup lang="ts">
defineProps({
    bindTo: {
        type: String,
        required: true,
    },
    lookingAt: {
        type: String,
        required: true,
    }
})
</script>