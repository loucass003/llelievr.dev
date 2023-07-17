<template>
    <div class="prose max-w-none w-full text-justify">
        <PageContent></PageContent>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

// TODO: To complete
const lang = 'en';

const PageContent = defineAsyncComponent({
    loader: async () => {
        const comp = await import(`@/views/projects/${route.params.id}-${lang}.md`).catch((e) => {
            router.push({ name: '404' })
        })
        return comp;
    },

})
</script>


<style scoped>
.prose img {
    width: 100%;
    height: 600px;
    max-width: none;
    object-fit: contain;
}

.prose .embed-responsive iframe {
    width: 100%;
}
</style>