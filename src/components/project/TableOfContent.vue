<template>
    <div v-for="item in $props.items">
        <router-link :key="item.hash" :to="{ name: 'ProjectPage', params: $route.params, hash: `#${item.hash}` }"
            class="flex group  items-center gap-2 hover:text-app-foreground-code">
            <!-- <Arrow direction="right" :size="16"></Arrow> -->
            <div class="h-0.5 w-2 m-1 bg-app-background-code group-hover:hidden"></div>
            <div class="fill-app-cyan hidden group-hover:block">
                <Arrow direction="right" :size="16"></Arrow>
            </div>
            <div class="transition-color duration-500 group-hover:font-bold">
                {{ item.label }}
            </div>
        </router-link>
        <div v-if="item.childrens" class="pl-3">
            <TableOfContent :items="item.childrens" />
        </div>
    </div>
</template>


<script setup lang="ts">
import { type TocItem } from '@/store/tocStore';
import type { PropType } from 'vue';

defineProps({
    items: {
        type: Array as PropType<TocItem[]>,
        required: false,
    },
})
</script>