<template>
    <div v-for="item in $props.items">
        <router-link :key="item.hash" :to="{ name: 'ProjectPage', params: $route.params, hash: `#${item.hash}` }"
            class="flex group  items-center gap-2 hover:text-app-foreground-code">
            <!-- <Arrow direction="right" :size="16"></Arrow> -->
            <div v-if="activeHash !== item.hash">
                <div class="h-0.5 w-2 m-1 bg-app-background-code group-hover:hidden"></div>
                <div class="fill-app-cyan hidden group-hover:block">
                    <Arrow direction="right" :size="16"></Arrow>
                </div>
            </div>
            <div v-else>
                <div class="fill-app-orange">
                    <Arrow direction="right" :size="16"></Arrow>
                </div>
            </div>
            <div class="transition-color duration-500 group-hover:font-bold"
                :class="{ 'text-app-foreground-bright': activeHash === item.hash }">
                {{ item.label }}
            </div>
        </router-link>
        <div v-if="item.childrens" class="pl-4">
            <TableOfContent :items="item.childrens" :active-hash="activeHash" />
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
    activeHash: {
        type: String,
        required: false
    }
})



</script>