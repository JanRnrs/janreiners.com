<script setup lang="ts">
import Experience from './components/Experience.vue';
import Education from './components/Education.vue';
import Skills from './components/Skills.vue';
import Picture from './components/Picture.vue';
import PersonalInfo from './components/PersonalInfo.vue';
import Languages from './components/Languages.vue';

</script>

<template>
  <div class="container mx-auto">
    <Picture />
    <PersonalInfo />
    <Skills />
    <Experience />
    <Languages />
    <Education />
  </div>
</template>

<style scoped>
</style>
