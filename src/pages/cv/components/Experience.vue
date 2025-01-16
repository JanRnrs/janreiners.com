<script setup lang="ts">
import { ref } from 'vue';

interface Job {
  id: number;
  title: string;
  company: string;
  dates: string;
  description: string;
}

const jobs = ref<Job[]>([
  {
    id: 1,
    title: 'Test Job 1',
    company: 'Company 1',
    dates: 'from - until',
    description: 'description'
  },
  {
    id: 2,
    title: 'Test Job 2',
    company: 'Company 2',
    dates: 'from-until',
    description: 'description '
  }
]);
</script>

<template>
  <div class="">
    <h2 class="">Experience</h2>
    <div v-for="job in jobs" :key="job.id" class="">
      <h3 class="">{{ job.title }}</h3>
      <p class="">{{ job.company }} - {{ job.dates }}</p>
      <p>{{ job.description }}</p>
    </div>
  </div>
</template>



<style scoped></style>
