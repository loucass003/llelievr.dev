<template>
    <contentTag>
        <router-link :to="{ name: 'ProjectPage', hash: `#${hash}` }" :id="hash"
            class="hover:underline fill-app-foreground-bright flex gap-2 items-center text-app-foreground-code no-underline">
            <slot></slot>
            <LinkIcon></LinkIcon>
        </router-link>
    </contentTag>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    tag: {
        type: String,
        required: true,
        default: 'h2'
    },
    hash: {
        type: String,
        required: true,
    }
})
// i have no clue why this works ....
const contentTag = props.tag;

const route = useRoute();

onMounted(() => {
    // This is so it scroll on loading, 
    // because the content of the page is lazy loaded i cannot put that logic 
    // inside the router scroll behaviour
    if (props.hash === route.hash.substring(1)) {
        const elem = document.getElementById(props.hash);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' })
        }
    }
})

</script>