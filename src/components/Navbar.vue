<template>
    <div class="flex sm:px-10 h-16 items-center justify-between">
        <router-link :to="{ name: 'Home' }">
            <div
                class="h-12 sm:px-6 xs:px-4 items-center flex justify-center hover:bg-app-foreground-bright rounded-md transition-colors ease-in fill-app-foreground text-app-foreground-bright font-extrabold text-lg">
                LLelievr
                <span class="text-app-foreground text-xs">DEV</span>
            </div>
        </router-link>

        <div class="flex gap-3">
            <IconBtn href="https://github.com/loucass003">
                <GithubIcon></GithubIcon>
            </IconBtn>
            <IconBtn href="https://www.linkedin.com/in/lucas-lelievre-108799132/">
                <LinkedIn></LinkedIn>
            </IconBtn>
        </div>
    </div>
</template>