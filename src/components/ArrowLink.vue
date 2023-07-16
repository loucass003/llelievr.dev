<template>
    <router-link :to="to">
        <div
            class="text-app-cyan-soft fill-app-cyan-soft flex items-center gap-3 transition-transform duration-500 group-hover:underline group-hover:translate-x-2 hover:underline hover:translate-x-2">
            <slot></slot>
            <Arrow direction="right"></Arrow>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import Arrow from '@/components/icons/Arrow.vue';
import type { PropType } from 'vue';
import type { RouteLocationRaw } from 'vue-router';


defineProps({
    to: {
        type: Object as PropType<RouteLocationRaw>,
        required: true
    },
})
</script>