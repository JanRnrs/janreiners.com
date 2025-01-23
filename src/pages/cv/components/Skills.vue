<script setup lang="ts">
import config from '@/config.json';
import SectionHeadline from './SectionHeadline.vue';

const skills: string = config.cv.skillsList;
</script>

<template>
  <div>
    <SectionHeadline headline="Skills" />
    {{ skills }}
  </div>
</template>

<style scoped></style>
