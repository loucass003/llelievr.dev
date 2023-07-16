<template>
    <contentTag>
        <div class="hover:underline fill-app-foreground-bright flex gap-2 items-center">
            <slot></slot>
            <LinkIcon></LinkIcon>
        </div>
    </contentTag>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { ref } from 'vue';

const props = defineProps({
    tag: {
        type: String,
        required: true,
        default: 'h2'
    }
})
// i have no clue why this works ....
const contentTag = props.tag;


</script>