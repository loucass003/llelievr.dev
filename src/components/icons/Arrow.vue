<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        :style="{ transform: rotation, width: `${size}px`, height: `${size}px` }">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';

type ArrowDirection = 'left' | 'right' | 'up' | 'down';


const props = defineProps({
    size: {
        type: Number,
        default: 22
    },
    direction: {
        type: String as PropType<ArrowDirection>,
        default: 'left',
        validator(direction: ArrowDirection) {
            return ['left', 'right', 'up', 'down'].includes(direction);
        }
    }
})


const rotation = computed(() => {
    const rotationMap: Record<ArrowDirection, string> = {
        'left': 'rotate(0deg)',
        'right': 'rotate(180deg)',
        'up': 'rotate(90deg)',
        'down': 'rotate(270deg)',
    }
    return rotationMap[props.direction];
})

</script>