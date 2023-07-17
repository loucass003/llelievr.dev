<template>
  <div class="gap-5 my-10 grid md:grid-cols-1 lg:grid-cols-2 w-full">
    <BlogCard id="slimevr" :description="$t('project-slimevr-desc')" :title="$t('project-slimevr-title')"
      :image="$t('project-slimevr-image')" :order="1"></BlogCard>
    <BlogCard id="face-cam" v-bind="$ta('project-face-cam-card')" :order="2"></BlogCard>
  </div>
</template>
