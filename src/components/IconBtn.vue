<template>
    <template v-if="!!to">
        <router-link :to="to">
            <div
                class="h-12 w-12 items-center flex flex-col justify-center hover:bg-app-background-content rounded-md transition-colors ease-in fill-app-foreground">
                <slot></slot>
            </div>
        </router-link>
    </template>
    <template v-else-if="!!href">
        <a :href="href">
            <div
                class="h-12 w-12 items-center flex flex-col justify-center hover:bg-app-background-content rounded-md transition-colors ease-in fill-app-foreground">
                <slot></slot>
            </div>
        </a>
    </template>
</template>


<script setup lang="ts">
defineProps({
    to: {
        type: String,
        required: false
    },
    href: {
        type: String,
        required: false
    },
})
</script>