<template>
    <div class="sm:px-10 xs:px-2 w-full flex justify-around">
        <div class="w-full max-w-6xl flex flex-col">
            <div class="lg:px-6">
                <Navbar></Navbar>
            </div>
            <div
                class="flex flex-col gap-8 justify-center xs:p-8 sm:p-12 xs:text-2xl sm:text-4xl text-app-foreground-bright animate-fade-right animate-once animate-ease-in animate-duration-500 w-full border-[1px] border-app-muted bg-app-background-content aspect-video rounded-2xl relative">
                <div>
                    <p>Hi there! i am <span class="text-app-purple">Lucas Lelièvre</span></p>
                    <p>i am sofware developer and a maker!</p>
                </div>

                <div class="xs:text-xl sm:text-2xl">
                    <ArrowLink :to="{ name: 'Home' }">About me</ArrowLink>
                </div>
            </div>
            <div class="lg:px-6">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '../Navbar.vue';
import ArrowLink from '../ArrowLink.vue';
</script>
