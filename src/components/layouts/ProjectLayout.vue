<template>
    <div class="md:px-10 sm:px-4 xs:px-2 w-full flex justify-around">
        <div class="w-full max-w-5xl flex flex-col">
            <Navbar></Navbar>
            <div class="flex flex-col bg-app-background-content rounded-3xl overflow-hidden">
                <div class="flex w-full h-[400px] sm:px-8 xs:px-4" :style="{
                    backgroundImage: `linear-gradient(rgb(39 24 93 / 20%), rgb(20, 20, 26)), url(/images/${$t(`project-${$route.params.id?.toString()}-image`)})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }">
                    <div class="self-end  max-w-2xl py-4 flex flex-col">
                        <h1 class="text-app-foreground-bright text-4xl">{{
                            $t(`project-${$route.params.id?.toString()}-title`) }}
                        </h1>
                    </div>
                </div>
                <div class="flex w-full sm:p-8 xs:p-4 lg:gap-8 xs:gap-4 relative">
                    <div class="flex flex-grow flex-col" id="page-container">
                        <h2 class="text-xl text-justify font-bold">{{ $t(`project-${$route.params.id?.toString()}-desc`) }}
                        </h2>
                        <div class="flex h-0.5 rounded-xl mx-10 bg-app-muted my-4"></div>
                        <RouterView></RouterView>
                    </div>
                    <div class="flex min-w-[250px] xs:hidden md:block h-full">
                        <div class="sticky top-0">
                            <TableOfContent bind-to="page-container" looking-at="h2"></TableOfContent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';
import TableOfContent from '@/components/TableOfContent.vue';
</script>
