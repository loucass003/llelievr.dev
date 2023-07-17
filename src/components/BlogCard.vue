<template>
    <router-link :to="{ name: 'BlogPage', params: { id } }" class="h-full">
        <div class="h-full group animate-duration-200 animate-fade animate-once animate-ease-in border-[1px] rounded-xl overflow-hidden border-app-muted hover:border-app-foreground"
            :style="{ background: `url(/images/${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
            <div class="h-full flex flex-col bg-app-background-content min-h-[250px] bg-opacity-80 hover:bg-opacity-80  xs:p-8 sm:p-12 justify-between  hover:bg-app-background-code transition-colors "
                :style="{ animationDelay: `${order * 100}ms` }">
                <div class="flex flex-col gap-3">
                    <div class="text-3xl text-app-foreground-bright">{{ title }}</div>
                    <p class="text-justify" v-html="description"></p>
                </div>
                <ArrowLink :to="{ name: 'BlogPage', params: { id } }">Read more</ArrowLink>
            </div>
        </div>
    </router-link>
</template>

<script setup lang="ts">
defineProps({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    order: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    }
})
</script>