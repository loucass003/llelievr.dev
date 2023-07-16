<template>
    <div class="prose max-w-none w-full text-justify">
        <PageContent />
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

// TODO: To complete
const lang = 'en';

const PageContent = defineAsyncComponent(
    async () => {
        const comp = await import(`@/views/projects/${route.params.id}-${lang}.md`).catch((e) => {
            router.push({ name: '404' })
        })
        console.log(comp)
        return comp;
    }
)
</script>


<fluent locale="en">


</fluent>