<script setup lang="ts">
import config from '@/config.json';
import SectionHeadline from './SectionHeadline.vue';

const schools: Education[] = config.cv.Education;
</script>

<template>
  <div>
    <div class="text-mainColor-700">
      <SectionHeadline headline="Education"/>
    </div>
    <div v-for="(school, index) in schools" :key="index" class="mb-4">
      <span class="flex justify-between"> 
        <h3 class="text-xl font-bold">{{ school.Degree + ', '+ school.Field }}</h3> 
        <p class="text-m text-gray-400"> {{ school.Date }}  </p>
      </span>
      <p class="text-m font-bold">{{ school.School }}  </p>
      <p class="text-m text-gray-400"> {{ school.Location}} </p>
      <p class="text-m"> Full-time, Grade: {{ school.Grade}} </p>
    </div>
  </div>
</template>

<style scoped>
</style>