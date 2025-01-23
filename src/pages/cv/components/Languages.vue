<script setup lang="ts">
import config from '@/config.json';
import SectionHeadline from './SectionHeadline.vue';

interface Language {
  language: string;
  skillLevel: string;
}

const languages: Language[] = config.cv.Languages;
</script>

<template>
  <div>
    <SectionHeadline headline="Languages" />
    <ul>
      <li v-for="(language, index) in languages" :key="index">
        {{ language.language }}: {{ language.skillLevel }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
